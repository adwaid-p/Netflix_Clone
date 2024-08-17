import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyACmdkBVyZQlVaoUgHVMqfOtqGg6e68Rmw",
  authDomain: "netflix-fc04b.firebaseapp.com",
  projectId: "netflix-fc04b",
  storageBucket: "netflix-fc04b.appspot.com",
  messagingSenderId: "740775143079",
  appId: "1:740775143079:web:a1d9146e788f17a020dd82",
  measurementId: "G-V2VCE66N1Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);
export const db=getFirestore(app)