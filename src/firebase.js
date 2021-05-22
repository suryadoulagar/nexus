import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC8VMpFCFdbEGdJeTdQsaCP0IUdJpIX5KI",
  authDomain: "nexustribes.firebaseapp.com",
  projectId: "nexustribes",
  storageBucket: "nexustribes.appspot.com",
  messagingSenderId: "42582298408",
  appId: "1:42582298408:web:200d0440b50f8a906cca1d",
  measurementId: "G-MTELL1J7SV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//login page
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;