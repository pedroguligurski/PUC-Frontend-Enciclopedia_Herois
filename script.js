const herois = [
    {
        nome: "Ben Tennyson",
        universo: "Ben 10",
        poder: "Transformação em alienígenas com o Omnitrix",
        ano: 2005
    },

    {
        nome: "Gamora",
        universo: "Marvel",
        poder: "Combate corpo a corpo e habilidade com espadas",
        ano: 1975
    },

    {
        nome: "Anakin Skywalker",
        universo: "Star Wars",
        poder: "Uso da Força e habilidades com sabre de luz",
        ano: 1999
    },

    {
        nome: "Tung Tung Tung Sahur",
        universo: "Italian Brainrot",
        poder: "Aura e habilidades com porrete.",
        ano: 2007
    }

];


const corpoTabela = document.getElementById("corpoTabela");
const campoBusca = document.getElementById("campoBusca");
const botaoOrdenar = document.getElementById("botaoOrdenar");
const mensagemVazia = document.getElementById("mensagemVazia");


function mostrarHerois(lista) {

    corpoTabela.innerHTML = "";

    lista.forEach(function (heroi) {

        const linha = document.createElement("tr");

        linha.innerHTML =
            "<td>" + heroi.nome + "</td>" +
            "<td>" + heroi.universo + "</td>" +
            "<td>" + heroi.poder + "</td>" +
            "<td>" + heroi.ano + "</td>";

        corpoTabela.appendChild(linha);
    });


    if (lista.length === 0) {
        mensagemVazia.style.display = "block";
    } else {
        mensagemVazia.style.display = "none";
    }
}


campoBusca.addEventListener("input", function () {

    const termo = campoBusca.value.toLowerCase();

    const filtrados = herois.filter(function (heroi) {

        return heroi.nome.toLowerCase().includes(termo)
            || heroi.universo.toLowerCase().includes(termo)
            || heroi.poder.toLowerCase().includes(termo);

    });

    mostrarHerois(filtrados);
});


let crescente = true;


botaoOrdenar.addEventListener("click", function () {

    herois.sort(function (a, b) {

        if (crescente) {
            return a.ano - b.ano;
        } else {
            return b.ano - a.ano;
        }

    });


    if (crescente) {
        botaoOrdenar.textContent = "Ordenar por ano ↓";
    } else {
        botaoOrdenar.textContent = "Ordenar por ano ↑";
    }


    crescente = !crescente;

    mostrarHerois(herois);
});


mostrarHerois(herois);