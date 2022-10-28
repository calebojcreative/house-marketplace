import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNfGSCKPDpSsj9qix9VAe_MOxxUaWWv8s",
  authDomain: "house-marketplace-app-8d4c7.firebaseapp.com",
  projectId: "house-marketplace-app-8d4c7",
  storageBucket: "house-marketplace-app-8d4c7.appspot.com",
  messagingSenderId: "52250195311",
  appId: "1:52250195311:web:07e6c9c27327837b73e49a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
