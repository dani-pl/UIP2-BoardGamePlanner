import React , {useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { View, Animated, TouchableOpacity, Text, PanResponder, Dimensions} from 'react-native'
import { globalStyles } from '../../styles'


const gameDuration = 5000;
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


    useEffect(() => {
        if(players.length > 1 && (prevPlayers.length !== players.length)){
            start();
        }else if(players.length < 2){
            stop()
        }
    }, [players])
    
    useEffect(()=>{
        if(timer === gameDuration){
            clearInterval(timerInterval);
            var tempWinner = players[Math.floor(Math.random()*players.length)];
            setWinner(tempWinner);
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
        setWinner(0);
    }

    const colors = [
        '#4FC1E8',
        '#A0D568',
        '#FFCE54',
        '#ED5564',
        '#AC92EB',
      ];

    // you need a value, which should transform into another value
    // Animated.Value makes changes to the screen without rerendering the component
    // we only get the getter, so when we rerender the component we always get the value of the first render of the component
    const opacity = useState(new Animated.Value(0))[0];

    const pan = useState(new Animated.ValueXY())[0]

    const getPlayers = useCallback((event, gesture) => {
        // console.log("EVENT: ", event)
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
                getPlayers(event,gesture)
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
                getPlayers(_,gesture)},
            onPanResponderEnd: (event,gesture) => getPlayers(event,gesture),

            /* fires when the finger is released from the screen, used for clean up */
            onPanResponderRelease: () => {
            //     /* flattendOffset => it adds the offset to the main value 
            //         makes sure that the object is doesn't snap to another position when the user touches the screen again */
            //     // pan.flattenOffset();
                // players.flattenOffset()
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
            }
            // ,pan.getLayout()
            ]} {...panResponder.panHandlers}>

                <Text style={globalStyles.h1}> {timer==0 && players.length >1 ? "Ready?": players.length < 1 ? "":(gameDuration - timer)/1000}</Text>
                {players.map((player) => {
                    var isWinner = (winner.identifier == player.identifier)
                    console.log(isWinner)
                    return (
                        <Animated.View
                            key={player.identifier}
                            style={{
                                width: isWinner ? Dimensions.get('window').width :110,
                                height: isWinner ? Dimensions.get('window').height :110,
                                backgroundColor:isWinner ? colors[player.identifier-1] : 'transparent',
                                borderRadius: !isWinner && (110 / 2),
                                borderWidth: 8,
                                borderColor: colors[player.identifier-1],
                                alignItems:'center',
                                justifyContent:'center',
                                position:'absolute',
                                top: !isWinner && (player.y - (110/2)),
                                left: !isWinner && (player.x - (110/2)),
                            }}
                        ><Text style={[globalStyles.h1,{color:colors[player.identifier-1]}]}>{player.identifier}</Text></Animated.View>
                        
                    )
                })}
                    {/* <Animated.View
                        style={[{
                            width: 110,
                            height: 110,
                            borderRadius: 110 / 2,
                            borderWidth: 8,
                            borderColor: '#1EA596',
                            backgroundColor: 'transparent',
                        },
                        // returns an object that has the left and top value of the (new) position
                        // pan.getLayout()
                    ]}
                    //   {...panResponder.panHandlers}
                    />  */}
                        {/* <View style={{
                            backgroundColor:'black',
                            width: 20, 
                            height: 20, 
                            borderRadius: 20/2
                        }}/> */}
            </View>
        // </View>
    )
}

export default FirsPlayerView;