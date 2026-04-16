const NomeJogo = "O Voo de Porcello";
const AnoDeLancamento = 2026;
const Genero = "Arcade";
const Empresa = "Kaleu Academy";
const Classificacao = 16;

window.addEventListener("load", function () {

    // verifica se já entrou antes
    let jaVisitou = localStorage.getItem("primeiraVisita");

    if (!jaVisitou) {

        alert("Bem-vindo ao " + NomeJogo + "!");

        let anoAtual = new Date().getFullYear();

        if (anoAtual === AnoDeLancamento) {
            alert("🎉 Grande lançamento do jogo este ano!");
        }

        let nome = prompt("Digite seu nome:");
        alert("Olá, " + nome + "! Bem-vindo ao " + NomeJogo);

        let idade = Number(prompt("Digite sua idade:"));


        document.addEventListener("DOMContentLoaded", function () {
            if (idade >= Classificacao) {
                alert("Acesso liberado ✅");
            } else {
                alert("Acesso Negado! Conteúdo Bloqueado 🚫");

                document.body.style.filter = "blur(10px)";
                document.body.style.pointerEvents = "none";
            }
        });


        // marca que já entrou
        localStorage.setItem("primeiraVisita", "true");



    }
});

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