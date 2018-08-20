//Importing firebase
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB_3y8kZiW2KzYKlhX0KMHHCOjLToUZ6E4",
    authDomain: "reactivenativedemo.firebaseapp.com",
    databaseURL: "https://reactivenativedemo.firebaseio.com",
    projectId: "reactivenativedemo",
    storageBucket: "reactivenativedemo.appspot.com",
    messagingSenderId: "675336683507"
};

export default firebase.initializeApp(config);