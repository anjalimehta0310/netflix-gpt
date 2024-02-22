// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1H_H-JUGqNZBiCpv-2vRMaBZALoloEpg",
  authDomain: "netflixgpt-1b3dc.firebaseapp.com",
  projectId: "netflixgpt-1b3dc",
  storageBucket: "netflixgpt-1b3dc.appspot.com",
  messagingSenderId: "763675555649",
  appId: "1:763675555649:web:4b53d9dba3dcd9e20493c0",
  measurementId: "G-K474G1JC31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();