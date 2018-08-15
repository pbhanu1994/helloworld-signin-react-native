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

export default class Firebase {
    static auth;

    //Object for details to store:
    static regInfo = {
        name: '',
        email: '',
        password: ''
    }
    static init() {
        firebase.initializeApp(config);
        Firebase.auth = firebase.auth();
    }
}

export { Firebase };