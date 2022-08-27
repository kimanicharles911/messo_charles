import { initializeApp } from "firebase/app";
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FIREBASE_API_KEY } from '@env';

const firebaseApp = initializeApp({
  apiKey: `${FIREBASE_API_KEY}`,
  authDomain: 'messo-3d26b.firebaseapp.com',
  projectId: 'messo-3d26b',
  storageBucket: 'messo-3d26b.appspot.com',
  messagingSenderId: '1189281438',
  appId: '1:1189281438:web:c278eaf726bb02bff5458f',
});

const db = initializeFirestore(firebaseApp, { experimentalForceLongPolling: true });
const auth = getAuth(firebaseApp);

export { db, auth };