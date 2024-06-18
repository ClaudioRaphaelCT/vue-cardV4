// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfIkjYIBLUpID7BzPDOtKuN1WEAPqsjl8",
  authDomain: "cartaorapharhai.firebaseapp.com",
  projectId: "cartaorapharhai",
  storageBucket: "cartaorapharhai.appspot.com",
  messagingSenderId: "1087042207721",
  appId: "1:1087042207721:web:eaf39d2d9ebf2bcab59578",
  measurementId: "G-82D0QNLV0F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
