import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaHthBGPIdqhEH9Rj7RuRNbdh-6RsjCRM",
  authDomain: "mercado-x.firebaseapp.com",
  projectId: "mercado-x",
  storageBucket: "mercado-x.appspot.com",
  messagingSenderId: "158836854353",
  appId: "1:158836854353:web:3ec258106db4cdc645b270"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;