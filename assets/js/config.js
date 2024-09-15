// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "//",
  authDomain: "webshop-b89e2.firebaseapp.com",
  projectId: "webshop-b89e2",
  storageBucket: "webshop-b89e2.appspot.com",
  messagingSenderId: "234551944412",
  appId: "1:234551944412:web:6f1a42f48566d0cca64019",
  measurementId: "G-C1QCWV78Z3",
  databaseURL: "https://webshop-b89e2-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
