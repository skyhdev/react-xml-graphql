import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBxEK_a31iSoe3XLjGk8NZ_387MFQ4QLns",
    authDomain: "united-axle-308620.firebaseapp.com",
    projectId: "united-axle-308620",
    storageBucket: "united-axle-308620.appspot.com",
    messagingSenderId: "564895065510",
    appId: "1:564895065510:web:1c10aba93e4a18a1561b67",
    measurementId: "G-206599EG68"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }