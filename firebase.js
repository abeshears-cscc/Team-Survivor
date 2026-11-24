import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  onSnapshot,
  query
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "columbia-state-survivor.firebaseapp.com",
  projectId: "columbia-state-survivor",
  storageBucket: "columbia-state-survivor.firebasestorage.app",
  messagingSenderId: "833813082189",
  appId: "1:833813082189:web:f7dd779c0e25ba78a5ec04",
  measurementId: "G-EQEMMC1DEW"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  onSnapshot,
  query
};