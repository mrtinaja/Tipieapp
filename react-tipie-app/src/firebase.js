import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBSDQesYTkIM27NGRU3bkGpJIhImt8msAM",
    authDomain: "tipie-app-b7d21.firebaseapp.com",
    projectId: "tipie-app-b7d21",
    storageBucket: "tipie-app-b7d21.appspot.com",
    messagingSenderId: "877336920735",
    appId: "1:877336920735:web:11bc6b6e7b957a871658aa"  
  };
initializeApp(firebaseConfig);
const auth = getAuth();

const login = (email,password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("User logged in",userCredential);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error trying to log in:",errorCode,":",errorMessage);
  });

  const logout = () => {
    auth.signOut();
  };

export {
    auth,
    login,
    logout
};