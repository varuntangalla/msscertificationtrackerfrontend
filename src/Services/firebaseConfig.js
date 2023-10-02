// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4mxlryJgrBQgFXAnJHcH0cxCP7Hl_030",
  authDomain: "mss-certificationtracker.firebaseapp.com",
  projectId: "mss-certificationtracker",
  storageBucket: "mss-certificationtracker.appspot.com",
  messagingSenderId: "325444260750",
  appId: "1:325444260750:web:b2d998a3900c32c364cadf",
  measurementId: "G-XWVFFZR7NT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export default db;
