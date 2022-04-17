// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJMn-1jRY5xMHAi2JKPqmuCN6CCIoFDSc",
  authDomain: "margeret-fox-fitness.firebaseapp.com",
  projectId: "margeret-fox-fitness",
  storageBucket: "margeret-fox-fitness.appspot.com",
  messagingSenderId: "418474016940",
  appId: "1:418474016940:web:1f308dbc4b0fe1c781df09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;