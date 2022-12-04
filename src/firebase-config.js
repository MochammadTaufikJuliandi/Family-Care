

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD5sBrN4h0chrFX8GKNJ0cIORQnZ20EhNE",
  authDomain: "family-care-b2e06.firebaseapp.com",
  projectId: "family-care-b2e06",
  storageBucket: "family-care-b2e06.appspot.com",
  messagingSenderId: "78382669149",
  appId: "1:78382669149:web:8d963e4e775fd9dc6f9cb4",
  measurementId: "G-K0KK9R09EK"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
