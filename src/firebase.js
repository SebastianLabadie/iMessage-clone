import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAYP-5PFN206T_AtB3Nh7mApJqdGOmjGUw",
    authDomain: "imessage-clone-312bf.firebaseapp.com",
    databaseURL: "https://imessage-clone-312bf.firebaseio.com",
    projectId: "imessage-clone-312bf",
    storageBucket: "imessage-clone-312bf.appspot.com",
    messagingSenderId: "534776983860",
    appId: "1:534776983860:web:e2c75fde5a4b7b999c7561"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore();
const auth = firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider()


export { db,auth,provider }