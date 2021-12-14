import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAy_BntiMWIjejCfIDhpq3JxoJ7dOk2WlU",
  authDomain: "amazun-next.firebaseapp.com",
  projectId: "amazun-next",
  storageBucket: "amazun-next.appspot.com",
  messagingSenderId: "1000934815817",
  appId: "1:1000934815817:web:72b49feca743fb236be798",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
