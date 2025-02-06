
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-OwmJwpBIcClLWXX8T8EyZhuWMJgaRpE",
  authDomain: "marcos-ecommerce-react.firebaseapp.com",
  projectId: "marcos-ecommerce-react",
  storageBucket: "marcos-ecommerce-react.firebasestorage.app",
  messagingSenderId: "423356301508",
  appId: "1:423356301508:web:b05cc3e46811439620c991"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
