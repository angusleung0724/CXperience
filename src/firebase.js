// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1JJ19SxkU2TVn74PgjBxIpeCsYU4pT60",
  authDomain: "cxperience-71bc1.firebaseapp.com",
  projectId: "cxperience-71bc1",
  storageBucket: "cxperience-71bc1.appspot.com",
  messagingSenderId: "145824324668",
  appId: "1:145824324668:web:d93fd165de812e4668f739",
  measurementId: "G-14DEWR146Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);