import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-c79gTtdr4pr652epxcHXa7mVtPX9MtQ",
  authDomain: "message-app-389c7.firebaseapp.com",
  projectId: "message-app-389c7",
  storageBucket: "message-app-389c7.firebasestorage.app",
  messagingSenderId: "894867265556",
  appId: "1:894867265556:web:cc0d9a542ad18d23692f01"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);