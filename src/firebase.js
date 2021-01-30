import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPwxsEztjhfkY8TvrXQsFsG7m4VKQjvkI",
    authDomain: "nexus-4fbcf.firebaseapp.com",
    projectId: "nexus-4fbcf",
    storageBucket: "nexus-4fbcf.appspot.com",
    messagingSenderId: "811879743456",
    appId: "1:811879743456:web:3fa3bdb4e72f3e3c81b585",
    measurementId: "G-Y75XT39XLV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//login page
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;