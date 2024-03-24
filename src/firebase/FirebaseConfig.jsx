// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoBK0pv8HHo-kPoYXHbLc1NpGeiK4fTgI",
  authDomain: "myblog-a447f.firebaseapp.com",
  projectId: "myblog-a447f",
  storageBucket: "myblog-a447f.appspot.com",
  messagingSenderId: "687397782747",
  appId: "1:687397782747:web:8484160dd2e86a8d79f8fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
