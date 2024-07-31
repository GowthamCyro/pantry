// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3hEzErv41CgaYRW0LMdEPpg4sbI7ghbE",
  authDomain: "hspantry-13a20.firebaseapp.com",
  projectId: "hspantry-13a20",
  storageBucket: "hspantry-13a20.appspot.com",
  messagingSenderId: "140249390343",
  appId: "1:140249390343:web:04894790124d3415bf39a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app,firestore}