import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAl0I6v3ok7rguJmCygw07LIsQbDVbsolE",
  authDomain: "my-burger-app-b263a.firebaseapp.com",
  databaseURL: "https://my-burger-app-b263a-default-rtdb.firebaseio.com",
  projectId: "my-burger-app-b263a",
  storageBucket: "my-burger-app-b263a.appspot.com",
  messagingSenderId: "786019548745",
  appId: "1:786019548745:web:b863bfdb0ead320a7c4998",
  measurementId: "G-GF2ST3NY38"
  };
  
  // Initialize Firebase
  const app =initializeApp(firebaseConfig);

   const auth=getAuth(app)
   export default auth