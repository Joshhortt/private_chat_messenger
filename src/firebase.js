import firebase from "firebase/app"
import "firebase/auth"


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDY-PpPeOhUPG92bIW2adObJLycWY8dYBE",
  authDomain: "privatechat-c6851.firebaseapp.com",
  projectId: "privatechat-c6851",
  storageBucket: "privatechat-c6851.appspot.com",
  messagingSenderId: "561939188390",
  appId: "1:561939188390:web:a1402a51fe6518d7c14267"
}).auth();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import firebase from "firebase/app"
// import "firebase/auth"

// export const auth = firebase.initializeApp({
//   apiKey: "AIzaSyBW1PUWQtZhZmEx8DWGVJjAgwQhi3K1_Tw",
//   authDomain: "auth-demo-c1925.firebaseapp.com",
//   projectId: "auth-demo-c1925",
//   storageBucket: "auth-demo-c1925.appspot.com",
//   messagingSenderId: "746557330045",
//   appId: "1:746557330045:web:059113e6cc70c0bb8d1714"
// }).auth()