/* 
Exercícios do dia 24/05/2017
- Vetores

1-Ler dois vetores de tamanho m denominado l1 e n (vetor l2). Criar um terceiro vetor (l3) de tamanho m+n, e
faça a união dos dois vetores lidos pelo usuário e guarde o conteúdo dos vetores l1 e l2 em l3.
Imprima todo o conteúdo do vetor l3.*/


var m = parseInt(prompt("tamanho do vetor 1 (l1):"));
var n = parseInt(prompt("tamanho do vetor 2 (l2):"));
var l1 = new Array(m);
var l2 = new Array(n);
var l3 = new Array(m+n);

for (var i = 0; i < l1.length; i++) {
	l3[i] = l1[i];
}
j=0;
for (i = l1.length; i < l3.length; i++) {
	l3[i] = l2[j];
	j++;
}
for(i=0;i<l3.length;i++) {
	console.log(l3);
}

/*
2- Embaralhe um vetor de tamanho n com os valores de 1 a 100
*/
var n = parseInt(prompt("tamanho do vetor:"));
var vetor=[];
for(var i = 0; ((i < n) && (n<=100)); i++) {
	vetor[i] = Math.floor(Math.random()*100)+1;
}
console.log(vetor);

/*
3- Entre com um tamanho n de vetor e dados informados pelo usuário.
Encontre os valores do início, meio e fim de um vetor.
*/
var n = parseInt(prompt("n:"));
var vetor = [];
var inicio = meio = fim = m =0;
for(var i=0; i<n; i++) {
	vetor[i] = parseInt(prompt("valores do vetor:"));
}
inicio = vetor[0];
m = Math.floor(vetor.length/2);
meio = vetor[m];
fim = vetor[vetor.length -1];
console.log(inicio);
console.log(meio);
console.log(fim);

/*
4- Entre com um vetor de palavras. Apresente qual é a palavra maior tamanho. Ler essas palavras do teclado
*/
var vetor  = ["casa", "mala", "abacaxi"];
var maior = vetor[0];
for (var i = 0; i < vetor.length; i++) {
	if(vetor[i].length > maior.length) {
		maior = vetor[i];
	}
}
console.log(maior);