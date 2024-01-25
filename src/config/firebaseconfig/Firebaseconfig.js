import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDmHt4FMCI-YjGXLv8ZtFXaWtm7AxbnAM0",
  authDomain: "todoapp-react-df539.firebaseapp.com",
  projectId: "todoapp-react-df539",
  storageBucket: "todoapp-react-df539.appspot.com",
  messagingSenderId: "161089698737",
  appId: "1:161089698737:web:e8ca01453ae16e65ee9b90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);