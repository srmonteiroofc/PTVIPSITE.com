// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
apiKey: "SUA_API_KEY",
authDomain: "ptvip-teste.firebaseapp.com",
projectId: "ptvip-teste",
storageBucket: "ptvip-teste.firebasestorage.app",
messagingSenderId: "407028833766",
appId: "1:407028833766:web:79d7dbf7ee968944248a27",
measurementId: "G-1XXWV7S8YH"
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

export { app };
