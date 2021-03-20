import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCytK6pm7AzXt7-m6xfSvWL54sP5eGP7WA",
    authDomain: "catch-of-the-day-tzu.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tzu-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "catch-of-the-day-tzu",
    storageBucket: "catch-of-the-day-tzu.appspot.com",
    messagingSenderId: "238806429264",
    appId: "1:238806429264:web:366fd6a19b7b4ef79aab55",
    measurementId: "G-KK8GLQKXMS"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
