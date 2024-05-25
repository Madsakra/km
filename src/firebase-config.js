// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyAxEdBnCj_K-k6JfbD_VxpCE8OIJgCsux4",
  authDomain: "project-genie-e8864.firebaseapp.com",
  projectId: "project-genie-e8864",
  storageBucket: "project-genie-e8864.appspot.com",
  messagingSenderId: "423638250548",
  appId: "1:423638250548:web:ecac752bf8eb72fc2e4661",
  measurementId: "G-NXS5MZXSYY"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);