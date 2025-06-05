// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
  getFirestore,
  collection,
  deleteDoc,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF_LBe7s03iVMPFR0aYlFW3uqzBswl684",
  authDomain: "portfolio-d08f8.firebaseapp.com",
  projectId: "portfolio-d08f8",
  storageBucket: "portfolio-d08f8.firebasestorage.app",
  messagingSenderId: "502731618273",
  appId: "1:502731618273:web:bb7b62bd7dd5cf1c3784a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, collection, deleteDoc, addDoc, getDocs, doc, updateDoc,db };
