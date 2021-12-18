import firebase from 'firebase/compat/app';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCKOnMeLTdTI99HZ4k6kA83EcWLdTBNMLs",
    authDomain: "clone-efd4a.firebaseapp.com",
    projectId: "clone-efd4a",
    storageBucket: "clone-efd4a.appspot.com",
    messagingSenderId: "704300523499",
    appId: "1:704300523499:web:d0 edf99cde4480b12403ae",
    measurementId: "G-LTB7FSN2KX"
  };

 
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref(`/images/cover.jpg`)

export default storage;


 