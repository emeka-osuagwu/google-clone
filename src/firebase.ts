import firebase from 'firebase/compat/app';
import 'firebase/storage'

const firebaseConfig = {
   
  };

 
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export default storage;


 