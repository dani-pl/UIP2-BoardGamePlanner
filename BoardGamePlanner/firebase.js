import * as firebase from 'firebase'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpGMYHTvDDxiDXInDHIV-6qKKCW345xIM",
  authDomain: "boardgameplanner-24a91.firebaseapp.com",
  databaseURL: "https://boardgameplanner-24a91-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "boardgameplanner-24a91",
  storageBucket: "boardgameplanner-24a91.appspot.com",
  messagingSenderId: "425669453214",
  appId: "1:425669453214:web:1be2f138893ed316e0228f"
};

  // Initialize Firebase
let app;
if(firebase.apps.length ===0){
  app=firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true }); //add this..

}else{
  app = firebase.app()
}

const db = firebase.database()
const auth = firebase.auth()
console.log(auth)
export { db, auth, firebase } 
