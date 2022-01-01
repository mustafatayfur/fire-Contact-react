import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDC3NO_EJdSImyOAV8kwDTPRTu-XnlqI8I",
    authDomain: "fire-contact-app-8b62c.firebaseapp.com",
    databaseURL: "https://fire-contact-app-8b62c-default-rtdb.firebaseio.com",
    projectId: "fire-contact-app-8b62c",
    storageBucket: "fire-contact-app-8b62c.appspot.com",
    messagingSenderId: "117358710517",
    appId: "1:117358710517:web:bd84860040b36c260bffbc"
  };

  const firebase = initializeApp(firebaseConfig);
  export default firebase;