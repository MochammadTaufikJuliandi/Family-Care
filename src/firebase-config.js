

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDaT5FhzK0lnNVx3MJUUX5ITvbIsdmJXAY",
    authDomain: "familycare-80e77.firebaseapp.com",
    projectId: "familycare-80e77",
    storageBucket: "familycare-80e77.appspot.com",
    messagingSenderId: "287391153797",
    appId: "1:287391153797:web:5b5887766ad48d24daf3ec"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
