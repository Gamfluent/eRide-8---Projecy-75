import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDitb2_Iaybv0G2IVWmLlYI1yWscRqEgzs",
  authDomain: "e-ride-app-d550f.firebaseapp.com",
  projectId: "e-ride-app-d550f",
  storageBucket: "e-ride-app-d550f.appspot.com",
  messagingSenderId: "364018965829",
  appId: "1:364018965829:web:5008f6a2093bd344fff22c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
