const CODIGO = "NEXUS2026";
const ADM_USER = "subgui";
const ADM_PASS = "nexus123";

let membros = JSON.parse(localStorage.getItem('membros')) || [];

/* TROCAR ABA */
function show(id){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

/* REGISTRAR */
function registrar(e){
e.preventDefault();

if(membros.some(m => m.nick.toLowerCase() === nick.value.toLowerCase())){
alert("Nick já existe");
return;
}

if(codigo.value !== CODIGO){
alert("Código inválido");
return;
}

let novo = {
nick: nick.value,
aniversario: "20/05",
disponivel: "Sempre",
pvp:true,
builder:true,
farm:true
};

membros.push(novo);
localStorage.setItem('membros', JSON.stringify(membros));

render();
alert("Conta criada!");
}

/* RENDER */
function render(){
let lista = document.getElementById('lista');
lista.innerHTML='';

membros.forEach((m,i)=>{
lista.innerHTML += `
<div class="member-card">
<div class="member-header">
<div class="member-name">${m.nick}</div>
<img class="member-img" src="https://mc-heads.net/avatar/${m.nick}">
</div>

<div class="member-info">
<div><b>Aniversário:</b> ${m.aniversario}</div>
<div><b>Disponível:</b> ${m.disponivel}</div>
</div>

<div class="member-tags">
${m.pvp ? '<div class="tag pvp">PVP</div>' : ''}
${m.builder ? '<div class="tag builder">BUILDER</div>' : ''}
${m.farm ? '<div class="tag farm">FARM</div>' : ''}
</div>
</div>
`;
});
}

/* ADM */
function loginADM(){
let u = prompt("Usuário:");
let p = prompt("Senha:");

if(u === ADM_USER && p === ADM_PASS){
show('adm');
renderADM();
}else{
alert("Negado");
}
}

function renderADM(){
let div = document.getElementById('listaADM');
div.innerHTML='';

membros.forEach((m,i)=>{
div.innerHTML += `
<div class="admin-item">
${m.nick}
<button onclick="remover(${i})">Remover</button>
</div>`;
});
}

function remover(i){
membros.splice(i,1);
localStorage.setItem('membros', JSON.stringify(membros));
render();
renderADM();
}

render();
