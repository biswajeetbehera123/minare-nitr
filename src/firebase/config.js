import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5gaLUDmvVjjPXtkiR9s0p3hTVd7CfjdI",
  authDomain: "minare-39d7a.firebaseapp.com",
  databaseURL: "https://minare-39d7a-default-rtdb.firebaseio.com",
  projectId: "minare-39d7a",
  storageBucket: "minare-39d7a.appspot.com",
  messagingSenderId: "574238750271",
  appId: "1:574238750271:web:805ccce5ac4211f8ed6a8a",
  measurementId: "G-F883S22W41"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);