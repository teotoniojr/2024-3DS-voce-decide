const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "texo01",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texo02",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texo03",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texo04",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texo05",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();