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
  apiKey: "AIzaSyDgbkb-76n0bRw-QJ6QNAD6wyiukfCJizc",
  authDomain: "my-portfolio-60ae4.firebaseapp.com",
  projectId: "my-portfolio-60ae4",
  storageBucket: "my-portfolio-60ae4.firebasestorage.app",
  messagingSenderId: "945446846598",
  appId: "1:945446846598:web:8a3e42b5a8a1b18dc4d107",
  measurementId: "G-582Q7TG6C4"
};

// 3. Inicialização
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

