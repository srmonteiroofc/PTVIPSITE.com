import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw_X2_5ntROLBDHj6TF_rFQj6Yra-ghxk",
  authDomain: "ptvip-teste.firebaseapp.com",
  projectId: "ptvip-teste",
  storageBucket: "ptvip-teste.firebasestorage.app",
  messagingSenderId: "407028833766",
  appId: "1:407028833766:web:79d7dbf7ee968944248a27"
};

const app = initializeApp(firebaseConfig);

// Correção do erro: Agora salvamos o "auth" de forma global na memória do navegador (window)
// para que o seu script.js consiga ler e destravar a tela de carregamento.
window.auth = getAuth(app);
