// Importa os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAw_X2_5ntROLBDHj6TF_rFQj6Yra-ghxk",
  authDomain: "ptvip-teste.firebaseapp.com",
  projectId: "ptvip-teste",
  storageBucket: "ptvip-teste.firebasestorage.app",
  messagingSenderId: "407028833766",
  appId: "1:407028833766:web:79d7dbf7ee968944248a27"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para criar a conta
function criarConta() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Conta criada com sucesso
      alert("Conta criada com sucesso!");
      window.location = "home.html"; // ou redirecione para onde quiser
    })
    .catch((error) => {
      alert("Erro: " + error.message);
    });
}

// Liga o botão ao evento
document.getElementById("criar").addEventListener("click", criarConta);
