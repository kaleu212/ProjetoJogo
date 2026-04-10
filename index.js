const NomeJogo = "O Voo de Porcello";
const AnoDeLancamento = 2026;
const Genero = "Arcade";
const Empresa = "Kaleu Academy";
const Classificacao = 0;

window.onload = function () {

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

// verifica ao carregar a página
window.onload = function () {
    let temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "light") {
        document.body.classList.add("light");
        document.getElementById("btnTema").innerText = "🌙";
    }
}

// alterna o tema
function alternarTema() {
    let body = document.body;
    let botao = document.getElementById("btnTema");

    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        botao.innerText = "🌙";
        localStorage.setItem("tema", "light");
    } else {
        botao.innerText = "☀️";
        localStorage.setItem("tema", "dark");
    }
}