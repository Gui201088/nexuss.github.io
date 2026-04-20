const USER = "subgui";
const PASS = "nexus123";

let recrutamentos = JSON.parse(localStorage.getItem('recrutamentos')) || [];

function show(id){
document.querySelectorAll('.section').forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}

/* ENVIAR */
function enviar(e){
e.preventDefault();

recrutamentos.push({
nick:nick.value,
motivo:motivo.value,
skill:skill.value,
tempo:tempo.value
});

localStorage.setItem('recrutamentos', JSON.stringify(recrutamentos));
alert("Enviado!");
}

/* LOGIN */
function login(e){
e.preventDefault();

if(user.value === USER && pass.value === PASS){
show('admin');
render();
}else{
alert("Erro");
}
}

/* RENDER ADM */
function render(){
let div = document.getElementById('lista');
div.innerHTML="";

recrutamentos.forEach((r,i)=>{
div.innerHTML += `
<div class="admin-card">
<b>${r.nick}</b><br>
${r.motivo}<br>
${r.skill}<br>

<button onclick="aceitar(${i})">Aceitar</button>
<button onclick="recusar(${i})">Recusar</button>
</div>
`;
});
}

function aceitar(i){
recrutamentos.splice(i,1);
localStorage.setItem('recrutamentos', JSON.stringify(recrutamentos));
render();
}

function recusar(i){
recrutamentos.splice(i,1);
localStorage.setItem('recrutamentos', JSON.stringify(recrutamentos));
render();
}
