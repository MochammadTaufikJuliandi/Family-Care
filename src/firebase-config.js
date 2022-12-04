import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBYmAZl4dNZXaz_naq9rBepl7TTQ7NipQA",
  authDomain: "family-care-945fc.firebaseapp.com",
  projectId: "family-care-945fc",
  storageBucket: "family-care-945fc.appspot.com",
  messagingSenderId: "559163743795",
  appId: "1:559163743795:web:5203a73799f8bb84164d46",
  measurementId: "G-89M3CG1HRJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
