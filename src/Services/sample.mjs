// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Your web app's Firebase configuration
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

const createCollection = async () => {
  try {
    // Access the 'employeeCollection' collection (creates if not exists)
    const employeeCollection = collection(db, "employeeCollection");

    // Replace this line with your actual JSON data import logic
    const jsonArray = require("../assets/employeeList.json");

    for (const item of jsonArray) {
      // Add each item to the collection
      const docRef = await addDoc(employeeCollection, item);
      console.log("Document written with ID: ", docRef.id);
    }

    console.log(
      'Firestore collection "employeeCollection" created successfully!'
    );
  } catch (error) {
    console.error("Error creating Firestore collection: ", error);
  }
};

// Trigger the collection creation when the script runs
createCollection();
