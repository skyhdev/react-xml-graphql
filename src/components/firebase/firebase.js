import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    // apiKey: "AIzaSyBxEK_a31iSoe3XLjGk8NZ_387MFQ4QLns",
    // authDomain: "united-axle-308620.firebaseapp.com",
    // projectId: "united-axle-308620",
    // storageBucket: "united-axle-308620.appspot.com",
    // messagingSenderId: "564895065510",
    // appId: "1:564895065510:web:1c10aba93e4a18a1561b67",
    // measurementId: "G-206599EG68"

    apiKey: "AIzaSyALYcprDPmyBm5omBjD47GqEEe5CwITwvs",
    authDomain: "tallans-imageupload-tuto-6fde2.firebaseapp.com",
    projectId: "tallans-imageupload-tuto-6fde2",
    storageBucket: "tallans-imageupload-tuto-6fde2.appspot.com",
    messagingSenderId: "906995519612",
    appId: "1:906995519612:web:decedfe193ccd401a3b9f9",
    measurementId: "G-Q6X75MCKKY"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }