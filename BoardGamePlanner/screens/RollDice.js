import React, {useState, useEffect} from 'react'
import { 
  Pressable,
  Text, View} from 'react-native';
import {globalStyles, neutral60} from "../styles";
import { FontAwesome5 } from '@expo/vector-icons';



const RollDice = ({route}) => {

    const Dice = route.params.dice
    const sides = route.params.sides
    const [nrDice, setNrDice] = useState(1)
    const [rolledSide, setRolledSide] = useState([])
    const [rolling,setRolling] = useState(false)

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
     * Roll the dice by generating random number based on the number of faces of the dice
     */
    const roll = () => {
        console.log('rollling')
        setRolledSide([])
        getSide()   
    }

    const getSide = () =>{
        for (let diceIdx = 0; diceIdx < nrDice; diceIdx++) {
            const rolled = Math.floor(Math.random(sides) * sides + 1)
            setRolledSide(rolledSide => [...rolledSide, rolled])
        }
    }

    return (  
        
        <View style={[globalStyles.container, {flexDirection:'column',justifyContent: 'space-between'}]}>  
            <View 
                style={{
                    flex:1, 
                    justifyContent:'space-evenly', 
                    marginTop: 8, 
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    flexDirection: 'row'
                }}
            >
            {
                [...Array(nrDice)].map((dice, index) => 
                    <Dice key={index} number={rolledSide[index]}/>    
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
                            <FontAwesome5 name="minus" color={neutral60}/>  Remove</Text>
                    </Pressable>
                    <Pressable 
                        style={[globalStyles.btnSecondary, {width: '45%'}]}
                        onPress={increase}
                    >
                            <Text style={globalStyles.btnTextNeutral}>
                            <FontAwesome5 name="plus" color={neutral60}/>  Add</Text>
                    </Pressable>
                </View>

                <Pressable 
                    style={[globalStyles.btnIconPrimary, {width:'95%', alignSelf:'center'}]}
                    onPress={roll}    
                >
                    <Text style={[globalStyles.btnTextWhite]}>
                        <FontAwesome5 name="dice" color="white" style={{fontSize:'16'}}/>  Roll
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RollDice ;