import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // If you plan to use Firestore



const firebaseConfig = {
  apiKey: 'AIzaSyArCqrFM25iwh_AoNmTv0dLfgmEg5V5Tp4',
  authDomain: 'e-commerce-app-74567.firebaseapp.com',
  projectId: 'e-commerce-app-74567',
  storageBucket: 'e-commerce-app-74567.appspot.com',
  messagingSenderId: '327437928024',
  appId: 'Y1:327437928024:web:8aa5eb0b76e77675d42c2d'
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
export default firebase;
