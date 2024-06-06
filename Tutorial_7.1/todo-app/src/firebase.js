import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyCCiQN9jAn3cQSRb3LlHR6qISt7Ets7XuY",
  authDomain: "todo-app-562ca.firebaseapp.com",
  projectId: "todo-app-562ca",
  storageBucket: "todo-app-562ca.appspot.com",
  messagingSenderId: "757270408529",
  appId: "1:757270408529:web:e656ef13eb01bbc111b770",
  measurementId: "G-FQ9W61X8JX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =  getFirestore (app);

export {auth, db };