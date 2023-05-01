import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNSUdWMxgPOtv_3rsumL69B2b3n6Jq0f8",
  authDomain: "chat-app-a37b0.firebaseapp.com",
  projectId: "chat-app-a37b0",
  storageBucket: "chat-app-a37b0.appspot.com",
  messagingSenderId: "947404278176",
  appId: "1:947404278176:web:1f51a7493bba1c57b1bcc5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
