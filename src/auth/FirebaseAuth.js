import firebaseConfig from "configs/FirebaseConfig";
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore/lite";

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const currentUser = auth.currentUser;
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export {
  db,
  auth,
  currentUser,
  googleAuthProvider,
  GoogleAuthProvider,
  facebookAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  createUserWithEmailAndPassword,
};
