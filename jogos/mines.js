<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<style>

body{
background:#07111d;
color:white;
padding:20px;
font-family:Arial;
}

.tabuleiro{

display:grid;

grid-template-columns:
repeat(5,1fr);

gap:8px;

margin-top:20px;

}

.casa{

aspect-ratio:1;

background:#163867;

border-radius:10px;

display:flex;

align-items:center;

justify-content:center;

font-size:28px;

}

button{

width:100%;

height:60px;

margin-top:20px;

font-size:22px;

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

</select>

<button id="apostar">

APOSTAR

</button>

<div
class="tabuleiro"
id="tabuleiro">

</div>

<script>

const tab=
document
.getElementById(
"tabuleiro"
);

for(
let i=0;
i<25;
i++
){

let d=
document
.createElement(
"div"
);

d.className=
"casa";

d.onclick=
()=>{

d.innerHTML=
"💎";

};

tab.appendChild(d);

}

document
.getElementById(
"apostar"
)

.onclick=

function(){

alert(
"BOTÃO FUNCIONOU"
);

};

</script>

</body>

</html>
