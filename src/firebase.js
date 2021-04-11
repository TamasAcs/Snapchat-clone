import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGQoixgpkQvj4TEvGf4UHiilrwsT7o20c",
    authDomain: "snapchat-clone-447ef.firebaseapp.com",
    projectId: "snapchat-clone-447ef",
    storageBucket: "snapchat-clone-447ef.appspot.com",
    messagingSenderId: "670166554636",
    appId: "1:670166554636:web:b1ea77712048539eb3b629"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };