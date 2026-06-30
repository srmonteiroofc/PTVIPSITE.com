const casas=document.querySelectorAll(".casa");
const botao=document.querySelector(".botao");
const multi=document.querySelector(".multi");
const seletor=document.querySelector("select");

let jogo=false;
let minas=[];
let abertas=[];
let multiplicador=1.10;

function gerarBombas(){

minas=[];

const qtd=
Number(seletor.value);

while(minas.length<qtd){

let n=
Math.floor(
Math.random()*25
);

if(
!minas.includes(n)
){

minas.push(n);

}

}

}

function iniciar(){

jogo=true;

abertas=[];

multiplicador=1.10;

multi.innerHTML="1.10x";

casas.forEach(c=>{

c.innerHTML="";

});

gerarBombas();

botao.innerHTML=
"SACAR";

}

function encerrar(){

jogo=false;

botao.innerHTML=
"APOSTAR";

}

function revelar(i){

if(!jogo)return;

if(
abertas.includes(i)
)return;

abertas.push(i);

if(
minas.includes(i)
){

casas[i].innerHTML="💣";

setTimeout(
encerrar,
600
);

return;

}

casas[i].innerHTML="💎";

multiplicador+=0.15;

multi.innerHTML=
multiplicador
.toFixed(2)
+"x";

}

casas.forEach(
(casa,index)=>{

casa.addEventListener(
"click",
()=>{

revelar(index);

}

);

}

);

botao.addEventListener(
"click",
()=>{

if(jogo){

encerrar();

}else{

iniciar();

}

}

);
