// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBCKHKNom8b1HYwJHd9qlEBtNgbADEfTWw",
   authDomain: "bike-warehouse-client.firebaseapp.com",
   projectId: "bike-warehouse-client",
   storageBucket: "bike-warehouse-client.appspot.com",
   messagingSenderId: "916272860664",
   appId: "1:916272860664:web:fd1ae835b1cd9f0bd25a0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;