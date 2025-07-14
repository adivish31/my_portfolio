import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
let app: FirebaseApp | undefined;
let db: Database | undefined;

if (
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.databaseURL &&
  firebaseConfig.projectId
) {
  try {
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
} else {
  console.warn('Firebase configuration is missing. Please check your .env file.');
}

export { db };
export default app;

