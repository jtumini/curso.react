// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc-gG_S3SDQnhmf4azU7WPP9rNCBYYZhs",
    authDomain: "curso-react-6ad82.firebaseapp.com",
    projectId: "curso-react-6ad82",
    storageBucket: "curso-react-6ad82.appspot.com",
    messagingSenderId: "182094126021",
    appId: "1:182094126021:web:734bcb04bfc86a5e0109ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider =new GoogleAuthProvider()