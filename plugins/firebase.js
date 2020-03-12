const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


  var firebaseConfig = {
    apiKey: "AIzaSyAz_3Nyiga17NYWgfFhyyIGZJqKvp3iu_c",
    authDomain: "udemynuxt-41545.firebaseapp.com",
    databaseURL: "https://udemynuxt-41545.firebaseio.com",
    projectId: "udemynuxt-41545",
    storageBucket: "udemynuxt-41545.appspot.com",
    messagingSenderId: "1021901292926",
    appId: "1:1021901292926:web:3135027bfc6aa3a3f7df2f"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  	firebase.initializeApp(firebaseConfig);
  }

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage }