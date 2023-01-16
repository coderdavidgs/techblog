import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqgzHiYjqQsyuJJYYj74J0cBirFK46hMc",
  authDomain: "techblog-8c32f.firebaseapp.com",
  projectId: "techblog-8c32f",
  storageBucket: "techblog-8c32f.appspot.com",
  messagingSenderId: "1013016526120",
  appId: "1:1013016526120:web:34fd34852af7835be4a41d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };