import { initializeApp }

from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {

getAuth,

createUserWithEmailAndPassword

}

from
"https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


// CONFIG

const firebaseConfig={

apiKey:
"AIzaSyAw_X2_5ntROLBDHj6TF_rFQj6Yra-ghxk",

authDomain:
"ptvip-teste.firebaseapp.com",

projectId:
"ptvip-teste",

storageBucket:
"ptvip-teste.firebasestorage.app",

messagingSenderId:
"407028833766",

appId:
"1:407028833766:web:79d7dbf7ee968944248a27"

};


// INICIAR

const app=

initializeApp(
firebaseConfig
);

const auth=

getAuth(
app
);


// BOTÃO

document

.getElementById(
"criar"
)

.addEventListener(

"click",

async()=>{

const email=

document
.getElementById(
"email"
)
.value;

const senha=

document
.getElementById(
"senha"
)
.value;


if(
!email||
!senha
){

alert(
"Preencha tudo"
);

return;

}


try{

await

createUserWithEmailAndPassword(

auth,

email,

senha

);

alert(
"Conta criada!"
);

window.location=

"home.html";

}

catch(e){

alert(

"Erro: "+

e.message

);

}

});
