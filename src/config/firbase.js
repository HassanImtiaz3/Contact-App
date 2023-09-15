// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPqMxkxSy1E5jK_qbJgIMyXNtiTIfkAlg",
  authDomain: "contact-app-d5294.firebaseapp.com",
  projectId: "contact-app-d5294",
  storageBucket: "contact-app-d5294.appspot.com",
  messagingSenderId: "727326083740",
  appId: "1:727326083740:web:4888b34b0f9b5977b7fb59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)