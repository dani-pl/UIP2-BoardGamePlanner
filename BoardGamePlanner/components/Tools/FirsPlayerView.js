import React , {useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { View, Animated, Vibration, Text, PanResponder, Dimensions, Easing} from 'react-native'
import { globalStyles } from '../../styles';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const gameDuration = 3000;
let timerInterval;


const usePrevPlayers = (update) => {
    const players = useRef();
    useEffect(()=>{
        players.current = update;
    })
    // return the previous players or if empty pass on the update
    return players.current || update
}

const FirsPlayerView = () => {
    
    const [players, setPlayers] = useState([]);
    const [winner, setWinner] = useState(null);
    const [timer, setTimer] = useState(0);
    const prevPlayers = usePrevPlayers(players);
    const pulseAnim = new Animated.Value(1);
    const winnerScale = new Animated.Value(1);
    const [background, setBackground] = useState('#FCFDFC');
    // Sound effects
    const [touchSound, setTouchSound] = useState();
    const [releaseSound, setReleaseSound] = useState();
    const [winnerSound, setWinnerSound] = useState();


    async function playTouchSound () {
        console.log('loading sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/Audio/Blop-Mark_DiAngelo-79054334.mp3')
        );
        setTouchSound(sound)

        console.log("playing BLOB");
        await sound.playAsync();
    }

    async function playReleaseSound () {
        console.log('loading sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/Audio/60013__qubodup__whoosh.mp3')
        );
        // const { sound } = await Audio.Sound.createAsync(
        //     require('../../assets/Audio/393813__deleted-user-6479820__swish-single-2.mp3')
        // );

        setReleaseSound(sound)

        console.log("playing WOOSH");
        await sound.playAsync();
    }

    async function playWinnerSound () {
        console.log('loading sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/Audio/322897__rhodesmas__connected-01.mp3')
        );
        setWinnerSound(sound)

        console.log("playing WINNER");
        await sound.playAsync();
    }

    useEffect(()=>{
        return touchSound ? () => 
            {
                console.log('unloading sound')
                touchSound.unloadAsync();
            }
        : undefined
    },[touchSound])

    useEffect(()=>{
        return releaseSound ? () => 
            {
                console.log('unloading sound')
                releaseSound.unloadAsync();
            }
        : undefined
    },[releaseSound])

    useEffect(()=>{
        return winnerSound ? () => 
            {
                console.log('unloading sound')
                winnerSound.unloadAsync();
            }
        : undefined
    },[winnerSound])


    useEffect(()=>{
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.1,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1.2,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1.1,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1.2,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])
        ).start()
    },[players, timer])

    useEffect(() => {
        if(players.length > 1 && (prevPlayers.length !== players.length)){
            start();
            
        }else if(players.length < 2){
            stop()
          
        }
    }, [players])
    
    useEffect(()=>{
        if(timer === gameDuration){
            Vibration.vibrate(1,1000);
            clearInterval(timerInterval);
            var tempWinner = players[Math.floor(Math.random()*players.length)];
            setWinner(tempWinner);
            setBackground(colors[tempWinner.identifier-1]);
            playWinnerSound()
            Animated.timing(winnerScale, {
                toValue: 2.5,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver:true
            })

            // console.log("WINNNNERERERE!!!! ",tempWinner)
            // alert("WINNNNERERERE!!!! " + tempWinner.identifier)
        }
    },[timer])


    /**
     * start the game
     */
    const start = () => {
        console.log('timer started')
        // reset the timer
        setTimer(0)
        // clear the interval stopping any ongoing time intervals
        clearInterval(timerInterval);
        // create new time interval that runs every 0,1 second
        timerInterval = setInterval(()=>{
            // for each 100ms add 100 to the timer
            setTimer(prevTime => prevTime + 1000);
            
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
            console.log(timer)
        },1000)
    }

    /**
     * stop the game
     */
    const stop = () => {
        console.log("timer stopped")
        // stop the ongoing interval
        clearInterval(timerInterval);
        // reset the values 
        console.log(winner)
        setTimer(0);
        setWinner(null);
        setBackground('#FCFDFC')
    }

    const colors = [
        '#25B4A4',
        '#ffb100',
        '#F194B4',
        '#DC3030',
        '#6359E8',
      ];

    // you need a value, which should transform into another value
    // Animated.Value makes changes to the screen without rerendering the component
    // we only get the getter, so when we rerender the component we always get the value of the first render of the component
    const opacity = useState(new Animated.Value(0))[0];

    const pan = useState(new Animated.ValueXY())[0]

    const getPlayers = useCallback((event, gesture) => {
        const {nativeEvent: {touches}} = event;
        const coords = touches.map(touch => ({
            identifier: touch.identifier,
            x: touch.locationX,
            y: touch.locationY 
        }));
        // console.log({touches},Dimensions.get('window').height)
        setPlayers(coords)
      },[],
    );
    


    // allows you to create a responder for every single touch
    // you have to handle the touch so you need to say yes or no and do something with it
    const panResponder = useMemo(() =>
        PanResponder.create({
            /* the user has just pressed the screen, do we handle it? yes 
            now we receive updates about how the user is moving their finger on the screen, as long as the finger is on the screen */
            onStartShouldSetPanResponder: () => true,
            /* the user starts moving the finger, do we want to handle it? yes */
            onMoveShouldSetPanResponder: () => true,
            /* fires when one of the above are set to true.
                the gesutre is about to start, do what you need to do here
            */
            onPanResponderGrant: () => {
                console.log("Access granted")
                console.log('touch detected')
                // pulseAnim.setOffset(pulseAnim._value)
                // it copies the value after the touch and store it so we don't lose the value when the user starts moving
                // pan.setOffset({
                // x: pan.x._value,
                // y: pan.y._value
                // });
                // players.setOffset(players.map(player => {
                //     return {
                //         x: player.x._value,
                //         y:player.y._value
                //     }
                // }));
            },
            onPanResponderStart:(event,gesture) => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
                playTouchSound();
                getPlayers(event,gesture)
                pulseAnim.setOffset(pulseAnim._value)
            },
            /* fires whichever function is passed every single time a move is detected on the screen.
                ignore the event and just get the gesture
            */
            // onPanResponderMove: (_, gesture) => {
            //     // console.log("ARGGA", args[1])
            //     pan.x.setValue(gesture.dx)
            //     pan.y.setValue(gesture.dy)
            // },
            onPanResponderMove: (_,gesture) => {
                // console.log("here",_.nativeEvent)
                getPlayers(_,gesture)
            },    
            onPanResponderEnd: (event,gesture) => 
                {   
                    playReleaseSound()
                    getPlayers(event,gesture);
                },

            /* fires when the finger is released from the screen, used for clean up */
            onPanResponderRelease: () => {
            //     /* flattendOffset => it adds the offset to the main value 
            //         makes sure that the object is doesn't snap to another position when the user touches the screen again */
            //     // pan.flattenOffset();
                // players.flattenOffset()
                pulseAnim.flattenOffset();
            }
        }),[]
    );

    /**
     * 
     */
    function moveBall (){
        Animated.timing(leftValue, {
            toValue: 100, // new value
            duration: 5000,
            useNativeDriver: true
        }).start()
    }

    return (
        // <View style={{flex:1}}>
            <View style={[{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: background
            }
            // ,pan.getLayout()
            ]} {...panResponder.panHandlers}>
                
                {/* <Text style={globalStyles.h1}> {timer == 0 && players.length > 1 ? "Ready?": players.length < 1 ? "":(gameDuration - timer)/1000}</Text> */}
                { players.length < 1 ? 
                    <View style={globalStyles.container}>
                        <Text style={[globalStyles.h4,{width:300, textAlign:'center'}]}>All players place and hold 1 finger on the screen</Text>
                        <Text>(2 to 5 players)</Text>
                        <View style={{
                            display: "flex",
                            backgroundColor:"#AFE4DE",
                            borderRadius: 100 / 2,
                            margin: 10
                        }}>
                            <MaterialCommunityIcons name="gesture-tap-hold" size={60} color='#1EA596' style={{padding: 20, alignItems: 'center',
                            justifyContent: 'center',}}/>
                        </View>
                    </View> 
                : 
                players.map((player) => {
                    var isWinner = winner !== null && (winner.identifier == player.identifier)
                    // console.log(isWinner)
                    return (
                        (winner == null || isWinner) &&
                        <Animated.View
                            key={player.identifier}
                            style={{
                                width: isWinner ? 225 : 130,
                                height: isWinner ? 225 : 130,
                                backgroundColor: isWinner ? "white" :'transparent',
                                borderRadius: (isWinner ? 225 : 130) / 2,
                                borderWidth: 20,
                                borderColor:  isWinner ? "white" : colors[player.identifier-1],
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                top: player.y - ((isWinner ? 225 : 130) /2),
                                left: player.x - ((isWinner ? 225 : 130) /2),
                                transform: [{scale: isWinner ? pulseAnim : 1}]
                            }}
                        >
                            {/* <Text style={[globalStyles.h1,{color:colors[player.identifier-1]}]}>{player.identifier}</Text> */}
                        </Animated.View>
                    )
                })}
            </View>
        // </View>
    )
}

export default FirsPlayerView;
