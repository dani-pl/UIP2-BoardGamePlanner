import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";
import {GameListItem} from './GameListItem';
import {FlatList} from 'react-native-gesture-handler'
import { firebase } from '../firebase';
import { GameLibrary } from './GameLibrary';



const MyLibrary = (index) => {
const [games,setGames] =useState([])
const [library,setLibrary]=useState([])
// const [gameIds,setGameIds] = useState()
// const[counter, setCounter] = useState(0)
// const [currentGame,setCurrentGames] =useState('')
const gamesRef = firebase.firestore().collection('games');

const getGames = () => {

// console.log(gameLibrary)
const result = getGameIds();
setLibrary(result);

console.log("result",result)
// console.log(gameIds)
// var intersectingGames=getArraysIntersection(result, gameLibrary);
// console.log("intersect",intersectingGames);

}

// const getArraysIntersection=(a1,a2)=>{
// console.log(a1[9],a2[2])
// return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
// }

// const getGameIds=()=>{
//     const result=[];
//     for (var i = 0, len = games.length; i < len; i++) {
//         // const result=[];
//         // result.push(games[i].id)
//         // console.log(games[i])
//         console.log(Object.values(games[i]))
       

//         // var names = result.map(function(item) {
//         //     return item['0'];
//         //   });
//         // console.log(names)

//         // var deeper = names.map(function(item) {
//         //     return item['0'];
//         //   });
//         // console.log(deeper)
//     }
//     setGameIds(gameIds)
//    }

const getGameIds=()=>{
    const ids=[];
    for (var i = 0, len = games.length; i < len; i++) {
    for (var j = 0, len1 = gameLibrary.length; j < len1; j++) {
       if(games[i].id==gameLibrary[j])
       { 
        ids.push(games[i]) 
        // console.log("ids",ids)
       }
    console.log("games",games[i].id,"library",gameLibrary[j])    
    }
}
    return ids
}


// const getGameIds= async () =>{
//     const names = Object.keys(games)
//     .filter((key) => key.includes("Name"))
//     .reduce((obj, key) => {
//         return Object.assign(obj, {
//           [key]: user[key]
//         });
//   }, {});

// console.log(names);
//    }

// const getGameIds=()=>{
// let accumulative=[];
// games.map(({ foo }) => {

//     accumulative.push(foo)});
    
//     // console.log(accumulative)
// }

// const getGameIds =()=>
// {let accumulative=[];
//     const ids = games.map((id)=>{   
//         accumulative.push(games[id].id);
//         console.log(accumulative)   
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
 
    // console.log(typeof(games))
    // console.log(currentUser.gameLibrary);
    // console.log(typeof(currentUser.gameLibrary));
    getGames()

    // getGames()
}
)
},[])


// useEffect(()=>{

// if(games!=[]){
//     getGameIds()
// }},[games])


// setGames(games => 
//     [...games,
//     {id:doc.id,
//     name,
//     image,
//     thumbnail} ])
// })


  return (
   
 <View>
     {library.map((data) => (
   <GameListItem name={data.name} image={data.image}></GameListItem>
      ))}
 </View>
            
  );


}


 

export {MyLibrary}