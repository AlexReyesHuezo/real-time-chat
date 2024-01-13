// Importar las funciones que necesitamos de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Agregar la configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkVSe50QPyUAzOnXZpUnlygX7KDAgSbk0",
  authDomain: "real-time-chat-19949.firebaseapp.com",
  projectId: "real-time-chat-19949",
  storageBucket: "real-time-chat-19949.appspot.com",
  messagingSenderId: "199895300177",
  appId: "1:199895300177:web:2357e2c4b46d2302922070",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
