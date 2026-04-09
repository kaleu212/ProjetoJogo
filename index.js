const NomeJogo = "O Voo de Porcello";
const AnoDeLancamento = 2026;
const Genero = "Arcade";
const Empresa = "Kaleu Academy";
const Classificacao = 0;

window.onload = function () {

    // Se já visitou o site, não pergunta de novo
    if (localStorage.getItem("usuarioJaEntrou")) {
        liberarConteudo();
        return;
    }

    // Primeira vez no site
    localStorage.setItem("usuarioJaEntrou", "true");

    alert("Bem-vindo ao " + NomeJogo + "!");

    let anoAtual = new Date().getFullYear();

    if (anoAtual === AnoDeLancamento) {
        alert("🎉 Grande lançamento do jogo este ano!");
    }

    let nome = prompt("Digite seu nome:");
    alert("Olá, " + nome + "! Bem-vindo ao " + NomeJogo);

    let idade = Number(prompt("Digite sua idade:"));

    if (idade >= Classificacao) {
        alert("Acesso liberado ✅");
        liberarConteudo();
    } else {
        alert("Acesso negado ❌");
    }
}

let temaClaro = false;

function alternarTema() {
    temaClaro = !temaClaro;

    document.body.classList.toggle("light");

    let botao = document.getElementById("btnTema");

    if (temaClaro) {
        botao.innerText = "🌙";
    } else {
        botao.innerText = "☀️";
    }
}