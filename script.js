// ===============================
// SELEÇÃO DOS BOTÕES E ABAS
// ===============================

const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

// ===============================
// TROCAR DE ABA
// ===============================

botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        // Remove "ativo" de todos os botões
        botoes.forEach(botao => {
            botao.classList.remove("ativo");
        });

        // Remove "ativo" de todas as abas
        abas.forEach(aba => {
            aba.classList.remove("ativo");
        });

        // Ativa o botão clicado
        botao.classList.add("ativo");

        // Abre a aba correspondente
        abas[indice].classList.add("ativo");
    });

});


// ===============================
// CRONÔMETROS
// ===============================

const tempos = [
    new Date("2026-10-30T23:59:59"),
    new Date("2026-11-30T23:59:59"),
    new Date("2026-12-15T23:59:59"),
    new Date("2026-12-31T23:59:59")
];


// Calcula o tempo restante
function calculaTempo(tempoObjetivo) {

    const agora = new Date();
    const diferenca = tempoObjetivo - agora;

    if (diferenca <= 0) {
        return [0, 0, 0, 0];
    }

    let segundos = Math.floor(diferenca / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return [dias, horas, minutos, segundos];
}


// ===============================
// ATUALIZA OS CRONÔMETROS
// ===============================

function atualizaCronometro() {

    for (let i = 0; i < tempos.length; i++) {

        const tempo = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}


// Inicia o cronômetro
atualizaCronometro();

setInterval(atualizaCronometro, 1000);