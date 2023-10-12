
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC7CzNWrneaaCKChyKpua7wrAGtmMhBIi0",
  authDomain: "event-management-bd4c6.firebaseapp.com",
  projectId: "event-management-bd4c6",
  storageBucket: "event-management-bd4c6.appspot.com",
  messagingSenderId: "663533692230",
  appId: "1:663533692230:web:0b7a9108133b287cbd7147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;