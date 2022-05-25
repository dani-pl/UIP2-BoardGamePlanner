import React, {useState, useEffect} from 'react'
import { 
  Pressable,
  Text, 
  View,
  Vibration
} from 'react-native';
import {globalStyles, neutral60, purple30} from "../styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { useTranslation } from 'react-i18next';
	

const RollDice = ({route}) => {


    // =============== VARIABLES =============  
    // the dice component
    const Dice = route.params.dice
    // number of sides of the dice
    const sides = route.params.sides
    // number of dices on the field
    const [nrDice, setNrDice] = useState(1)
    // array for storing the results of the dice roll
    const [rolledSide, setRolledSide] = useState([])
    // boolean if dice is rolling
    const [rolling,setRolling] = useState(false)
    // sound effects
    const [diceRollSound, setDiceRollSound] = useState();
    // initiate translation instance
    const { t } = useTranslation();
    
    /**
     * useEffect when rolling the dice 
     * dependent on rolling state 
     */
    useEffect(() => {
        // if rolling is true
        if(rolling) {
            // create interval of 0.08s
            var interval = setInterval(() => {
                // reset the rolled sides to empty array
                setRolledSide([])
                // generate and update random sides dice
                getSide()
                // every "roll" play haptic feedback to indicate the system is "rolling the dice"
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }, 80);

            // when rolling play the rolling sound
            playRollSound()
            
            // create time out 
            setTimeout(() => {
                // after 1.5s clear interval
                clearInterval(interval)
                // set rolling to false
                setRolling(false)
                // play vibration to indicate dice roll finished
                Vibration.vibrate(1,1000)
            }, 1500)
        }
    },[rolling])
    

    /**
     * useEffect dice roll sound 
     * dependent state of diceRollSound 
     */
    useEffect(()=>{
        // if diceRollSound exists unload the sound after playing
        return diceRollSound ? () => 
        {
            console.log('unloading sound')
            diceRollSound.unloadAsync();
            
        }
        : undefined
    },[diceRollSound])
    
    /**
     * increase the number of dices
     */
    const increase = () => {
        if (nrDice != 4) {
            setNrDice(nrDice + 1 )
        }
    }
    
    /**
     * decrease the number of dices
     */
    const decrease = () => {
        if ( nrDice != 1 ) {
            setNrDice(nrDice - 1 )
        }
    }
    
    /**
     * Plays the dice roll sound 
     */
    async function playRollSound () {
        console.log('loading sound')
        // load the sound file
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/Audio/220744__dermotte__dice-06.mp3')
        )
        // update the variable with the sound file
        setDiceRollSound(sound)
        console.log('playing roll sound')
        // play the sound
        await sound.playAsync()
    }


    /**
     * Roll the dice by generating random number based on the number of faces of the dice
     */
    const roll = () => {
        console.log('rollling')
        // set rolling to true
        // this initiates the useEffect that is dependent on the rolling variable
        setRolling(true)
    }


    /**
     * generates a random side for each of the dices
     */
    const getSide = () =>{
        for (let diceIdx = 0; diceIdx < nrDice; diceIdx++) {
            const rolled = Math.floor(Math.random(sides) * sides + 1)
            setRolledSide(rolledSide => [...rolledSide, rolled])
        }
        console.log(rolledSide)
    }

    return (  
        
        <View style={[
            globalStyles.container, {
            flexDirection:'column',
            justifyContent: 'space-between',
        }]}>  
            <View 
                style={{
                    flex:1, 
                    justifyContent:'space-evenly', 
                    alignContent: 'center',
                    marginTop: 8, 
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}
            >
            {
                [...Array(nrDice)].map((dice, index) => 
                    <Dice key={index} number={rolledSide[index]} color={
                        // rolledSide.every((val, i, arr) => val === arr[0]) && rolledSide[index] === sides ? "#E3C763" : purple30
                        purple30
                    }/>    
                )
                
            }
            </View>
            


            <View style={{marginBottom:20}}>
                <View style={[globalStyles.flexRow, {alignSelf:'center', justifyContent:'space-between'}]}>
                    <Pressable 
                        style={[globalStyles.btnSecondary, {width: '45%'}]} 
                        onPress={decrease}
                    >
                            <Text style={globalStyles.btnTextNeutral}>
                            <FontAwesome5 name="minus" color={neutral60}/>  {t('tools:removeDiceLabel')}</Text>
                    </Pressable>
                    <Pressable 
                        style={[globalStyles.btnSecondary, {width: '45%'}]}
                        onPress={increase}
                    >
                            <Text style={globalStyles.btnTextNeutral}>
                            <FontAwesome5 name="plus" color={neutral60}/>  {t('tools:addDiceLabel')}</Text>
                    </Pressable>
                </View>

                <Pressable 
                    style={[globalStyles.btnIconPrimary, {width:'95%', alignSelf:'center'}]}
                    onPress={roll}    
                >
                    <Text style={[globalStyles.btnTextWhite]}>
                        <FontAwesome5 name="dice" color="white" style={{fontSize:16}}/>  {t('tools:rollBtnLabel')}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RollDice ;