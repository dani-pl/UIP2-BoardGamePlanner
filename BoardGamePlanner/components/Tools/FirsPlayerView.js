import React , {useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { View, Animated, Vibration, PanResponder, Dimensions, Easing} from 'react-native'
import { backgroundColor, firstPlayerColors, globalStyles } from '../../styles';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import FirstPlayerStartView from './FPstart';


const gameDuration = 3000;
let timerInterval;

/**
 * This functions creates a reference of previous content of the player variable
 * @param {Array} update 
 * @returns 
 */
const usePrevPlayers = (update) => {
    // we create a reference 
    const players = useRef();
    useEffect(()=>{
        // we update the current reference with the passed update
        players.current = update;
    })
    // return the previous players or if empty pass on the update
    return players.current || update
}


/**
 * First Player Chooser Component
 */
const FirsPlayerView = ({navigation}) => {
    
    // =================== VARIABLES ===================
    const [background, setBackground] = useState(backgroundColor);
    const [players, setPlayers] = useState([]);
    const [winner, setWinner] = useState(null);
    const [timer, setTimer] = useState(0);
    const prevPlayers = usePrevPlayers(players);
    
    // ANIMATION VARIABLES
    // Animated.Value makes changes to the screen without rerendering the component
    // we only get the getter, so when we rerender the component we always get the value of the first render of the component
    const pulseAnim = new Animated.Value(1);

    // SOUND EFFECT VARIABLES
    const [touchSound, setTouchSound] = useState();
    const [releaseSound, setReleaseSound] = useState();
    const [winnerSound, setWinnerSound] = useState();


    // =================== SOUND EFFECTS ===================

    /**
     * play sound when a user touches the screen
     */
    async function playTouchSound () {
        console.log('loading sound');
         // load the sound file
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/Audio/Blop-Mark_DiAngelo-79054334.mp3')
        );
        // update the variable with the sound file
        setTouchSound(sound)
        // play the sound
        console.log("playing BLOB");
        await sound.playAsync();
    }

    /**
     * play sound when user releases finger from screen
     */
    async function playReleaseSound () {
        console.log('loading sound');
         // load the sound file
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/Audio/60013__qubodup__whoosh.mp3')
        );
        // update the variable with the sound file
        setReleaseSound(sound)
        // play the sound
        console.log("playing WOOSH");
        await sound.playAsync();
    }


    /**
     * play sound when winner has been chosen
     */
    async function playWinnerSound () {
        console.log('loading sound');
         // load the sound file
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/Audio/322897__rhodesmas__connected-01.mp3')
        );
         // update the variable with the sound file
        setWinnerSound(sound)
        // play the sound
        console.log("playing WINNER");
        await sound.playAsync();
    }

    // =================== USEEFFECTS ===================

    /**
     * Triggers on touch sound
     */
    useEffect(()=>{
        // if touchsound exists unload the sound after playing
        return touchSound ? () => 
            {
                // unload/stop the sound
                console.log('unloading sound')
                touchSound.unloadAsync();
            }
        : undefined
    },[touchSound])

    /**
     * triggers on release sound
     */
    useEffect(()=>{
        // if releasesound exists unload the sound after playing
        return releaseSound ? () => 
            {
                // unload/stop the sound
                console.log('unloading sound')
                releaseSound.unloadAsync();
            }
        : undefined
    },[releaseSound])

    /**
     * triggers on release sound
     */
    useEffect(()=>{
        // if winnersound exists unload the sound after playing
        return winnerSound ? () => 
            {
                // unload/stop the sound
                console.log('unloading sound')
                winnerSound.unloadAsync();
            }
        : undefined
    },[winnerSound])

    /**
     * Triggers on players and timer
     */
    useEffect(()=>{
        // here we define our animation for the winning player
        // we want too create a pulse animation so we use the animated value that was set before 
        Animated.timing(pulseAnim, {
            // we want to scale the object to 1.2
            toValue: 1.2,
            // it should take 0.8 seconds
            duration: 800,
            // we use a bouncy easing
            easing: Easing.bounce,
            // we use the native driver
            useNativeDriver: true
        }).start()
    },[players, timer])

    /**
     * Triggers on players
     * Here we define when to start and when to stop the game
     */
    useEffect(() => {
        // when there are more than 1 player and the amount does not equal the previous nm of players we start the game
        if(players.length > 1 && (prevPlayers.length !== players.length)){
            start();
        }else if(players.length < 2){
            // when there are no or only 1 player left we stop the game
            stop()          
        }
    }, [players])
    
    /**
     * Triggers on timer
     */
    useEffect(()=>{
        // when the time is over (i.e. timer is same as gameduration)
        if(timer === gameDuration){
            // we vibrate the phone for a second
            Vibration.vibrate(1,1000);
            // stop the timerInterval
            clearInterval(timerInterval);
            // we decide on the winner by randomly choosing from the number of players
            var tempWinner = players[Math.floor(Math.random()*players.length)];
            // we set the winner
            setWinner(tempWinner);
            // we change the views backround to the color of the winner
            setBackground(firstPlayerColors[tempWinner.identifier-1]);
            // we play the winner sound
            playWinnerSound()
        }
    },[timer])

    // =================== FUNCTIONS ===================

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
        setBackground(backgroundColor)
    }


    /**
     * callback function that is run when changes in gesture is detected. 
     * It identifies each finger (player) on the screen and updates the coordinates and identifier of the current players
     */
    const getPlayers = useCallback((event, gesture) => {
        const {nativeEvent: {touches}} = event;
        const coords = touches.map(touch => ({
            identifier: touch.identifier,
            x: touch.locationX,
            y: touch.locationY 
        }));
        setPlayers(coords)
      },[],
    );
    


    // allows us to create a responder for every single touch
    // we have to handle the touch so we need to say yes or no and do something with it
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
                // navigation.setOptions({headerShown: false})
                // navigation.setOptions({tabBarVisible: false})
                // it copies the value after the touch and store it so we don't lose the value when the user starts moving
                // pan.setOffset({
                // x: pan.x._value,
                // y: pan.y._value
                // });
            },
            onPanResponderStart:(event,gesture) => {
                // Touch detected
                // give haptic feedback
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
                // play the start sound
                playTouchSound();
                // get and update the players on the screen
                getPlayers(event,gesture)
                // make sure the we store the initial value of the pulse animation so we ddon't lose it when a player starts moving
                pulseAnim.setOffset(pulseAnim._value)
            },
            /* fires whichever function is passed every single time a move is detected on the screen.
            */
            onPanResponderMove: (event,gesture) => {
                // get and update the players on the screen
                getPlayers(event,gesture)
            },  
            /* fires which ever function at the end of the gesture */
            onPanResponderEnd: (event,gesture) => {   
                    // play release sound
                    playReleaseSound()
                    // get and update the players on the screen
                    getPlayers(event,gesture);
                },

            /* fires when the finger is released from the screen, used for clean up */
            onPanResponderRelease: () => {
                /* flattendOffset => it adds the offset to the main value 
                    makes sure that the object is doesn't snap to another position when the user touches the screen again */
                pulseAnim.flattenOffset();
                // navigation.setOptions({headerShown: true})
                // navigation.setOptions({tabBarVisible: true})
            }
        }),[]
    );

    return (
            <View style={[{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: background
            }
            ]} {...panResponder.panHandlers}> 
                
                { players.length < 1 ? 
                    <FirstPlayerStartView/>
                : 
                players.map((player) => {
                    var isWinner = winner !== null && (winner.identifier == player.identifier)
                    
                    return (
                        (winner == null || isWinner) &&
                        <Animated.View
                            key={player.identifier}
                            style={{
                                width: isWinner ? 225 : 130,
                                height: isWinner ? 225 : 130,
                                backgroundColor: isWinner ? backgroundColor :'transparent',
                                borderRadius: (isWinner ? 225 : 130) / 2,
                                borderWidth: 20,
                                borderColor:  isWinner ? backgroundColor : firstPlayerColors[player.identifier-1],
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                top: player.y - ((isWinner ? 225 : 130) /2),
                                left: player.x - ((isWinner ? 225 : 130) /2),
                                transform: [{scale: isWinner ? pulseAnim : 1}]
                            }}
                        />
                    )
                })}
            </View>
    )
}

export default FirsPlayerView;
