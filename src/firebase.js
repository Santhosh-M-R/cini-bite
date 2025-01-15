// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcuMnB_q96HgoeJgH8V1z0JysG_JS9CO0",
  authDomain: "cinebite-6798f.firebaseapp.com",
  projectId: "cinebite-6798f",
  storageBucket: "cinebite-6798f.firebasestorage.app",
  messagingSenderId: "635072641948",
  appId: "1:635072641948:web:65b8b78191a85fbbe02659"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);