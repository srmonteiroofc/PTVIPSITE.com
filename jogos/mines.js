const tabuleiro=
document.getElementById(
"tabuleiro"
);

const apostar=
document.getElementById(
"apostar"
);

const sacar=
document.getElementById(
"sacar"
);

const select=
document.getElementById(
"minas"
);

const multi=
document.getElementById(
"multi"
);

let jogo=false;

let bombas=[];

let abertas=0;

let multiplicador=1;

function criar(){

tabuleiro.innerHTML="";

for(
let i=0;
i<25;
i++
){

const c=
document.createElement(
"div"
);

c.className=
"casa";

c.onclick=
()=>abrir(
c,
i
);

tabuleiro
.appendChild(
c
);

}

}

function gerar(){

bombas=[];

while(
bombas.length<
Number(
select.value
)
){

let n=
Math.floor(
Math.random()*25
);

if(
!bombas.includes(
n
)
){

bombas.push(
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

function abrir(
casa,
i
){

if(
!jogo
)return;

if(
casa.innerHTML
)
return;

if(
bombas.includes(
i
)
){

casa.innerHTML=
"💣";

casa.style.background=
"#ff3737";

jogo=false;

setTimeout(()=>{

alert(
"PERDEU"
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
"#00c8ff";

}

apostar.onclick=
iniciar;

sacar.onclick=
()=>{

if(
!jogo
)return;

alert(
"Ganho: "+
multiplicador
.toFixed(2)
+"x"
);

jogo=false;

};

criar();
