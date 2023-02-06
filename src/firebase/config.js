import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",//your api key
  authDomain: "/* your project id in here*/.firebaseapp.com",
  projectId: "",//your project ID where you find in "firestore database"
  storageBucket: "/* your project id in here*/.appspot.com",
  messagingSenderId: "",//you find this id in number of project in firebase website
  appId: ""//your app id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };
