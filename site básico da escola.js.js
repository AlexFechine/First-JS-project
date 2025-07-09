alert('Bem-vindo ao site de nossa escola');

let nome;
let serie;
let nota;
let media = 7;
let maiorNota = 9;
let notaMaxima = 10;

do {
    nome = prompt('Digite seu nome completo');
} while (nome == '');

do {
    serie = prompt('Qual é a sua matrícula');
} while (serie == '');

do {
    nota = prompt('Digite a sua nota');
} while (nota == '' || isNaN(parseFloat(nota)));

nota = parseFloat(nota); // Convertendo a entrada da nota para um número decimal

if (nota == notaMaxima) {
    parabenizar(nome, nota);
} else if (nota >= media) {
    alert('Parabéns! Você passou!');
} else {
    alert('Infelizmente, você não passou');
}

function parabenizar(aluno, nota) {
    alert(`Parabéns, ${aluno}! Você tirou a nota máxima de ${nota}!`);
}

    