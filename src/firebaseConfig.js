// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyDKZI2RhJWSI24wqfp2mime8F4VvU3gPfQ",
  authDomain: "gpvakal.firebaseapp.com",
  databaseURL: "https://gpvakal-default-rtdb.firebaseio.com",
  projectId: "gpvakal",
  storageBucket: "gpvakal.firebasestorage.app",
  messagingSenderId: "815420236351",
  appId: "1:815420236351:web:abe72ba2e9f544d95fce8a",
  measurementId: "G-ZG351ENYKR"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);