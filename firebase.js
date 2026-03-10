// 1. Importações usando a CDN (necessário para rodar direto no navegador/HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    query, 
    orderBy, 
    onSnapshot, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. Suas credenciais REAIS do seu projeto novo
const firebaseConfig = {
  apiKey: "AIzaSyAem7g53cZo_JAOs9KX5Ld8xb4IoyERW2k",
  authDomain: "moura-portfolio-4ba4f.firebaseapp.com",
  projectId: "moura-portfolio-4ba4f",
  storageBucket: "moura-portfolio-4ba4f.firebasestorage.app",
  messagingSenderId: "692698953323",
  appId: "1:692698953323:web:fd520b4c8cb38fe49de32e"
};


// 3. Inicialização
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

