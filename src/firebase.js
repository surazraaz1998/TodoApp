// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
    
//   };
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgAeQY-ksyvbedf9EzoiB9S0DI54WuwlI",
    authDomain: "todo-app-d5434.firebaseapp.com",
    projectId: "todo-app-d5434",
    storageBucket: "todo-app-d5434.appspot.com",
    messagingSenderId: "275619832140",
    appId: "1:275619832140:web:ff5ad92d14136760ebafe9",
    measurementId: "G-8E0HPMEG3R"
});
const db = firebaseApp.firestore();
export default db;