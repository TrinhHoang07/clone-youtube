import firebase from "firebase/compat/app";
import "firebase/compat/auth";

firebase.initializeApp({
    apiKey: 'AIzaSyAJeqdFJCbiT7J2vjfJM1iHzZRkcPPP_3c',
    authDomain: 'todoapp-hoang.firebaseapp.com',
});

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider()