import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCuZdxycZV06ar8jGvShcy3hMRp6VfaRb0",
    authDomain: "ed-tead.firebaseapp.com",
    databaseURL: "https://ed-tead.firebaseio.com",
    projectId: "ed-tead",
    storageBucket: "ed-tead.appspot.com",
    messagingSenderId: "686073121115"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
