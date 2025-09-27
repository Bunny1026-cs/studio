
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "studio-2582988347-45050",
  appId: "1:782322634455:web:5b54b29691d22004472a92",
  apiKey: "AIzaSyCcf9qv5VLJiGyF3aFfmQhuGPlQXNdg59s",
  authDomain: "studio-2582988347-45050.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "782322634455"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
