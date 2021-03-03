import firebase from "firebase/app";
import "firebase/database";


var firebaseConfig = {
  apiKey: "AIzaSyDHHOt080C-8prEKPsSqcMGvboNBwka1Xk",
  authDomain: "mera-smart-ghar.firebaseapp.com",
  projectId: "mera-smart-ghar",
  storageBucket: "mera-smart-ghar.appspot.com",
  messagingSenderId: "249831730941",
  appId: "1:249831730941:web:7b8d0d2b7408056343d894"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.database();

  export default firebase;