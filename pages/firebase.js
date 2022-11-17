// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0KBCVPj-HbWZ1gnciGkRlvkaxUlOoCU",
  authDomain: "realworldgrade.firebaseapp.com",
  projectId: "realworldgrade",
  storageBucket: "realworldgrade.appspot.com",
  messagingSenderId: "114480972301",
  appId: "1:114480972301:web:805c695248de4644490b44",
  measurementId: "G-WEPCW8KWWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
