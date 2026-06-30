<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,initial-scale=1">

<title>PTVIP Mines</title>

<style>

body{

margin:0;

padding:20px;

background:#07111d;

font-family:Arial;

color:white;

}

select,
button{

width:100%;

height:60px;

border:none;

border-radius:14px;

margin-bottom:15px;

font-size:20px;

}

select{

background:#163867;

color:white;

}

button{

background:#4fc400;

color:white;

font-weight:bold;

}

.tabuleiro{

display:grid;

grid-template-columns:
repeat(5,1fr);

gap:8px;

}

.casa{

aspect-ratio:1;

background:#163867;

border-radius:12px;

display:flex;

justify-content:center;

align-items:center;

font-size:28px;

}

.multi{

height:60px;

background:#ffc400;

color:black;

display:flex;

align-items:center;

justify-content:center;

border-radius:14px;

margin-bottom:15px;

font-size:24px;

font-weight:bold;

}

</style>

</head>

<body>

<select id="minas">

<option value="3">
3 Minas
</option>

<option value="5">
5 Minas
</option>

<option value="7">
7 Minas
</option>

<option value="10">
10 Minas
</option>

</select>

<div
class="multi"
id="multi">

1.10x

</div>

<button
id="apostar">

APOSTAR

</button>

<div
class="tabuleiro"
id="tabuleiro">

</div>

<script>

const tab=
document.getElementById(
"tabuleiro"
);

const botao=
document.getElementById(
"apostar"
);

const multi=
document.getElementById(
"multi"
);

const minasInput=
document.getElementById(
"minas"
);

let bombas=[];

let ativo=false;

let multiplicador=1.10;

tab.innerHTML="";

for(
let i=0;
i<25;
i++
){

const c=
document
.createElement(
"div"
);

c.className=
"casa";

c.dataset.id=i;

tab.appendChild(c);

}

const casas=
document
.querySelectorAll(
".casa"
);

function gerarBombas(){

bombas=[];

let qtd=
Number(
minasInput.value
);

while(
bombas.length
<qtd
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

multiplicador=1.10;

multi.innerHTML=
"1.10x";

casas.forEach(c=>{

c.innerHTML="";

});

gerarBombas();

botao.innerHTML=
"SACAR";

}

function parar(){

ativo=false;

botao.innerHTML=
"APOSTAR";

}

function abrir(i){

if(
!ativo
)return;

if(
casas[i]
.innerHTML
!=""

)return;

if(
bombas.includes(i)
){

casas[i]
.innerHTML=
"💣";

parar();

return;

}

casas[i]
.innerHTML=
"💎";

multiplicador+=0.15;

multi.innerHTML=

multiplicador
.toFixed(2)

+"x";

}

casas.forEach(

(c,i)=>{

c.onclick=
()=>abrir(i);

}

);

botao.onclick=
()=>{

if(
ativo
){

parar();

}else{

iniciar();

}

};

</script>

</body>

</html>
