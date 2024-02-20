import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAs6u8Mj1SuztZqVe66P24gqjdPOZk1PP8",
  authDomain: "fir-app-b9c2c.firebaseapp.com",
  projectId: "fir-app-b9c2c",
  storageBucket: "fir-app-b9c2c.appspot.com",
  messagingSenderId: "571475681332",
  appId: "1:571475681332:web:bd6b64ce88e0d7aa6aea61"
};

// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();




