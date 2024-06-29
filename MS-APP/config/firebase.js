import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AppNavigator from '../App';
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
export default function App() {
  return <AppNavigator />;
}

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAs6u8Mj1SuztZqVe66P24gqjdPOZk1PP8",
//   authDomain: "fir-app-b9c2c.firebaseapp.com",
//   projectId: "fir-app-b9c2c",
//   storageBucket: "fir-app-b9c2c.appspot.com",
//   messagingSenderId: "571475681332",
//   appId: "1:571475681332:web:bd6b64ce88e0d7aa6aea61"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getFirestore(app);

// export { auth, database };
