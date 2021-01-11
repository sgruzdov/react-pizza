import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC4gXdnxi-xnkXv2KiAAo4xb4ilXvqHVq4",
    authDomain: "react-pizza-7e056.firebaseapp.com",
    databaseURL: "https://react-pizza-7e056-default-rtdb.firebaseio.com",
    projectId: "react-pizza-7e056",
    storageBucket: "react-pizza-7e056.appspot.com",
    messagingSenderId: "14872864636",
    appId: "1:14872864636:web:37063ab676ca31557ca6f9"
}

firebase.initializeApp(firebaseConfig)
export default firebase
