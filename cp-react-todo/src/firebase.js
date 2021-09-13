// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdV_t3e2G7vW1Qn6ScHAgyArDbif3ey0E",
  authDomain: "cp-react-todo.firebaseapp.com",
  projectId: "cp-react-todo",
  storageBucket: "cp-react-todo.appspot.com",
  messagingSenderId: "385186400007",
  appId: "1:385186400007:web:ae13de14f73bfd8d7fa7a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
