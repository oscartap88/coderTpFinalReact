
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDL_Bwyu4xpANqZaqAJWlorj2bWDozb_3A",
  authDomain: "reactcoctel.firebaseapp.com",
  projectId: "reactcoctel",
  storageBucket: "reactcoctel.appspot.com",
  messagingSenderId: "645850509221",
  appId: "1:645850509221:web:092a348d882e7e3da6824c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;