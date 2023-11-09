// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("nome");
    const origemInput = document.getElementById("origem");
    const destinoInput = document.getElementById("destino");
    const dataInput = document.getElementById("data");
    const listaPassagens = document.getElementById("listaPassagens");
    const adicionarPassagemBtn = document.getElementById("adicionarPassagem");

    adicionarPassagemBtn.addEventListener("click", function () {
        const nome = nomeInput.value;
        const origem = origemInput.value;
        const destino = destinoInput.value;
        const data = dataInput.value;

        if (nome && origem && destino && data) {
            const passagem = document.createElement("li");
            passagem.innerHTML = `
                <span>${nome}</span>
                <span>${origem} - ${destino}</span>
                <span>${data}</span>
            `;
            listaPassagens.appendChild(passagem);

            nomeInput.value = "";
            origemInput.value = "";
            destinoInput.value = "";
            dataInput.value = "";
        }
    });
});