<script>

const tab =
document.getElementById("tabuleiro");

const botao =
document.getElementById("apostar");

const multi =
document.getElementById("multi");

const minas =
document.getElementById("minas");

const status =
document.getElementById("status");

let bombas=[];
let ativo=false;
let abertas=[];
let multiplicador=1.10;

for(let i=0;i<25;i++){

const c=
document.createElement("div");

c.className="casa";

c.dataset.id=i;

c.onclick=
()=>abrir(i);

tab.appendChild(c);

}

const casas=
document.querySelectorAll(".casa");

function gerarBombas(){

bombas=[];

while(
bombas.length<
Number(minas.value)
){

let n=
Math.floor(
Math.random()*25
);

if(
!bombas.includes(n)
){

bombas.push(n);

}

}

}

function iniciar(){

ativo=true;

abertas=[];

multiplicador=1.10;

multi.innerHTML="1.10x";

status.innerHTML=
"💎 ESCOLHA UMA CASA";

botao.innerHTML=
"SACAR";

botao.style.background=
"linear-gradient(90deg,#ffbf00,#ff6b00)";

minas.disabled=true;

casas.forEach(c=>{

c.innerHTML="";

c.className="casa";

});

gerarBombas();

}

function revelarTudo(){

bombas.forEach(i=>{

casas[i]
.innerHTML=
"💣";

casas[i]
.classList
.add(
"bomba"
);

});

}

function abrir(i){

if(!ativo)return;

if(
abertas.includes(i)
)return;

abertas.push(i);

if(
bombas.includes(i)
){

revelarTudo();

status.innerHTML=
"💣 VOCÊ PERDEU";

setTimeout(()=>{

finalizar();

},1200);

return;

}

casas[i]
.innerHTML=
"💎";

casas[i]
.classList
.add(
"aberta"
);

multiplicador+=0.20;

multi.innerHTML=

multiplicador
.toFixed(2)
+"x";

status.innerHTML=

"🔥 "
+
abertas.length
+
" ACERTOS";

}

function finalizar(){

ativo=false;

minas.disabled=false;

botao.innerHTML=
"APOSTAR";

botao.style.background=
"linear-gradient(90deg,#36d100,#14ff77)";

}

botao.onclick=()=>{

if(!ativo){

iniciar();

return;

}

status.innerHTML=

"🎉 SACADO "
+

multi.innerHTML;

setTimeout(()=>{

finalizar();

},800);

};

</script>
