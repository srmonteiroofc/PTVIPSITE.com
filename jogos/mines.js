const tabuleiro =
document.getElementById(
"tabuleiro"
);

const minasSelect =
document.getElementById(
"minas"
);

const botao =
document.getElementById(
"apostar"
);

const multi =
document.getElementById(
"multi"
);

let jogo=false;

let minas=[];

let abertas=0;

let multiplicador=1;

function criar(){

tabuleiro.innerHTML="";

for(
let i=0;
i<25;
i++
){

const casa=
document.createElement(
"div"
);

casa.className=
"casa";

casa.onclick=
()=>clicar(
casa,
i
);

tabuleiro
.appendChild(
casa
);

}

}

function gerar(){

minas=[];

while(
minas.length<
Number(
minasSelect.value
)
){

let n=
Math.floor(
Math.random()*25
);

if(
!minas.includes(
n
)
){

minas.push(
n
);

}

}

}

function iniciar(){

jogo=true;

abertas=0;

multiplicador=1;

multi.innerHTML=
"1.00x";

criar();

gerar();

}

function clicar(
casa,
id
){

if(
!jogo
)return;

if(
casa.innerHTML
)
return;

if(
minas.includes(
id
)
){

casa.innerHTML=
"💣";

casa.style.background=
"#ff3434";

jogo=false;

setTimeout(()=>{

alert(
"VOCÊ PERDEU"
);

},300);

return;

}

abertas++;

multiplicador+=0.25;

multi.innerHTML=
multiplicador
.toFixed(2)
+"x";

casa.innerHTML=
"💎";

casa.style.background=
"#00d4ff";

}

botao.onclick=
iniciar;

criar();
