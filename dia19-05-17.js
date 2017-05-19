/*
Exercícios do dia 19-05-2017

1- Faça um vetor que seja inicializado da seguinte forma: Criar um vetor de tamanho 20.
Todos os índices pares devem armazenar valor 1. Indices ímpares devem armazenar valor 0.
Ex.:  1 0 1 0 ...
      0 1 2 3
Imprimir todo o vetor
*/

var vetor = [];
for (var i=0; i<20; i++) {
	if(i%2 === 0) {
		vetor[i] = 1;
	}
	if (i%2 != 0) {
		vetor[i] = 0;
	}
}
console.log(vetor);

/*
2- Crie dois vetores. Um corresponde ao gabarito e outro as respostas. Para cada índice corresponde a uma questão.
As questões podem ter valores A, B, C ou D

Exemplo: 

A D D A C B B A B C
0 1 2 3 4 5 6 7 8 9

Questões lidas pelo usuário

A B D A C B B A B D
0 1 2 3 4 5 6 7 8 9

Nota: 8
*/

var gabarito = ["A", "D", "D", "A", "C", "B", "B", "A", "B", "C"];
var nota = 0;
var respostas = [];

for (var i=0; i<10; i++) {
	respostas[i] =(prompt("resposta:"));
	if(respostas[i].toUpperCase() === gabarito[i]) {
		nota++;
	}
}
console.log(nota);

/*
3 - Ler um array onde cada elemento é uma letra. Contar quantas vogais existem nesse array
*/

var vetor = [];
var vogais = 0;
var para = 0;
for (var i=0; para != 1;i++) {
	vetor[i] = prompt("informe uma letra da palavra escolhida:\nInforme 0 quando terminar");
	if (vetor[i] == "0") {
		para = 1;
	}
	if((vetor[i] == "a") || (vetor[i] == "e") || (vetor[i] == "i") || (vetor[i] == "o") || (vetor[i] == "u")) {
		vogais++;
	}
}
console.log(vogais);