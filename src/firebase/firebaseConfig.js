import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCfB6eqvedavXGdrKVu_ui84K9jMWLEr0I",
  authDomain: "fitness-83320.firebaseapp.com",
  projectId: "fitness-83320",
  storageBucket: "fitness-83320.appspot.com",
  messagingSenderId: "999500331233",
  appId: "1:999500331233:web:4ff01e10be8e02a1e19fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth,provider)

