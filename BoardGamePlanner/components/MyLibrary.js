import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";
import {GameListItem} from './GameListItem';
import {FlatList} from 'react-native-gesture-handler'
import { firebase } from '../firebase';



const MyLibrary = (index) => {
const [games,setGames] =useState([])
// const [gameIds,setGameIds] = useState('')
// const [currentGame,setCurrentGames] =useState('')
const gamesRef = firebase.firestore().collection('games');

// const getGames = () => {

// const  playerLibrary= Object.values(index)
// const playLibraryArray = playerLibrary[0];
// console.log(playLibraryArray)

// getGameIds();
// console.log(gameIds)
// // var intersectingGames=getArraysIntersection(gameIds, playLibraryArray);
// // console.log(intersectingGames);

// }

// const getArraysIntersection=(a1,a2)=>{
//     // console.log(a1[9],a2[2])
//     return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
// }

// const getGameIds=()=>{
//     for (var i = 0, len = games.length; i < len; i++) {
//         const result=[];
//         result.push(games[i].id)
//         console.log(Object.entries(result))

//         var names = result.map(function(item) {
//             return item['0'];
//           });
//         console.log(names)

//         var deeper = names.map(function(item) {
//             return item['0'];
//           });
//         console.log(deeper)
//     }
//     setGameIds(gameIds)
//    }

const getGameIds=()=>{
let accumulative=[]
    games.map(({ foo }) => {

  
    // console.log("foo",foo)
    accumulative.push(foo)})
    
    // console.log(accumulative)
}

// const getIds =()=>
// {
//     const ids = games.map((id)=>{   
//         return games[id].id  
//     });   }


useEffect(async ()=>{
  gamesRef
  .onSnapshot(
  querySnapshot => {
        const games1 =[]
        querySnapshot.forEach((doc) => {
            const {name,image, thumbnail} = doc.data()
            games1.push({
                id:doc.id,
                name,
                image,
                thumbnail
            })
        })
    setGames(games1)
 
    console.log("games1",games1)
    console.log("games",games)
    getGameIds()

    // getGames()
}
)
},[])


useEffect(()=>{

if(games!=[]){
    getGameIds()
}},[games])


// setGames(games => 
//     [...games,
//     {id:doc.id,
//     name,
//     image,
//     thumbnail} ])
// })


  return (
   
  <Text>hdghdf</Text>
            
  );


}


 

export {MyLibrary}