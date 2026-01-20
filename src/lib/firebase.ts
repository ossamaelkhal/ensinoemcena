import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Variáveis para exportação
let app: FirebaseApp | undefined;
let db: Firestore | undefined;
let storage: FirebaseStorage | undefined;
let analytics: Analytics | undefined;

// Só inicializa se houver configuração válida (evita crash em dev/sem chaves)
// Verifica pelo menos a API Key e o Project ID
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    // Evita reinicialização dupla em hot-reload
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }
    
    db = getFirestore(app);
    storage = getStorage(app);

    isSupported().then(supported => {
      if (supported && app) {
        analytics = getAnalytics(app);
      }
    });
    
    console.log('Firebase conectado com sucesso.');
  } catch (error) {
    console.error('Erro ao inicializar Firebase:', error);
  }
} else {
  console.warn('Configuração do Firebase ausente. O site rodará em modo MOCK (Dados locais).');
}

export { db, storage, analytics };
