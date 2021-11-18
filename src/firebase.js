import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBULMqk5Kt1IgRiOyfiuuBt6WEEQ1b6aKE",
  authDomain: "linkedin-clone-af991.firebaseapp.com",
  projectId: "linkedin-clone-af991",
  storageBucket: "linkedin-clone-af991.appspot.com",
  messagingSenderId: "121716848267",
  appId: "1:121716848267:web:d94e14db706aecb230468e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
