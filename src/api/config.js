import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCwMqnNJLMKmhCjVTKYczQuqJIhZS1Gbjk',
  authDomain: 'react-udemy-meetups.firebaseapp.com',
  databaseURL: 'https://react-udemy-meetups-default-rtdb.firebaseio.com',
  projectId: 'react-udemy-meetups',
  storageBucket: 'react-udemy-meetups.appspot.com',
  messagingSenderId: '743942494963',
  appId: '1:743942494963:web:eb45c6290c2790e79b3586',
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
