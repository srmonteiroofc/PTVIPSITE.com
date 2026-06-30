<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,initial-scale=1">

<title>PTVIP • Mines</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{

background:
linear-gradient(
180deg,
#07111d,
#08182b,
#09111b
);

color:white;

min-height:100vh;

padding:14px;

}

.topo{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:14px;

}

.logo{

font-size:22px;

font-weight:900;

color:#ff6b3d;

}

.saldo{

width:140px;

padding:14px;

border-radius:20px;

background:#020912;

text-align:center;

}

.saldo span{

color:#26ff99;

font-size:22px;

font-weight:900;

}

.painel{

background:

linear-gradient(
180deg,
#0b1e35,
#08192d
);

border-radius:24px;

padding:16px;

}

.controles{

display:flex;

gap:10px;

margin-bottom:16px;

}

select{

flex:1;

height:56px;

background:#132a4c;

border:none;

border-radius:16px;

padding-left:16px;

color:white;

font-size:18px;

}

.multi{

width:140px;

height:56px;

background:#ffc400;

color:black;

font-weight:900;

font-size:22px;

border-radius:16px;

display:flex;

align-items:center;

justify-content:center;

}

.tabuleiro{

display:grid;

grid-template-columns:
repeat(5,1fr);

gap:8px;

}

.casa{

aspect-ratio:1;

border-radius:14px;

background:

linear-gradient(
180deg,
#173968,
#11284b
);

display:flex;

align-items:center;

justify-content:center;

font-size:28px;

transition:.15s;

box-shadow:

inset 0 6px 20px rgba(255,255,255,.04),

0 8px 20px rgba(0,0,0,.30);

}

.casa:active{

transform:scale(.94);

}

.aposta{

margin-top:18px;

}

.valor{

height:56px;

background:#132a4c;

border-radius:18px;

display:flex;

align-items:center;

justify-content:center;

font-size:20px;

margin-bottom:14px;

}

.botao{

width:100%;

height:62px;

border:none;

border-radius:20px;

background:

linear-gradient(
90deg,
#43b300,
#63e000
);

color:white;

font-size:20px;

font-weight:900;

}

</style>

</head>

<body>

<div class="topo">

<div class="logo">

← Mines

</div>

<div class="saldo">

SALDO<br>

<span>

R$0,00

</span>

</div>

</div>

<div class="painel">

<div class="controles">

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

</div>

<div
class="tabuleiro"
id="tabuleiro">

</div>

<div class="aposta">

<div class="valor">

R$1,00

</div>

<button
class="botao"
id="apostar">

APOSTAR

</button>

</div>

</div>

<script>

const tabuleiro=
document
.getElementById(
"tabuleiro"
);

const botao=
document
.getElementById(
"apostar"
);

const multi=
document
.getElementById(
"multi"
);

const seletor=
document
.getElementById(
"minas"
);

let ativo=false;

let bombas=[];

let abertas=[];

let multiplicador=1.10;



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

c.onclick=
()=>abrir(i);

tabuleiro
.appendChild(c);

}



function gerarBombas(){

bombas=[];

let qtd=
Number(
seletor.value
);

while(
bombas.length
<qtd
){

let n=
