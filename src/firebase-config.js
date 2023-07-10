// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeUvma21MEq4pSQUKcrc9o49bUpMIysWE",
  authDomain: "fonts-59d5c.firebaseapp.com",
  projectId: "fonts-59d5c",
  storageBucket: "fonts-59d5c.appspot.com",
  messagingSenderId: "757057689972",
  appId: "1:757057689972:web:ee26db9a19885a399b3421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)