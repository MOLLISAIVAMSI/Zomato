// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3_fhKyJrWhjvxtIP1uwa8szWbCvladJ4",
  authDomain: "wired-apex-428407-u9.firebaseapp.com",
  projectId: "wired-apex-428407-u9",
  storageBucket: "wired-apex-428407-u9.appspot.com",
  messagingSenderId: "960986860185",
  appId: "1:960986860185:web:842823b5426eb1c65b8608",
  measurementId: "G-ZVT6GH5VXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth};