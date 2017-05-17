/*
1- Fazer a exponenciação sem utilizar Math.pow
Dica: use "for"
*/

var n = parseInt(prompt("n:"));
var e = parseInt(prompt("expoente:"));
var r = 1;
for(var i=1; i<=e; i++) {
	r =r*n;
	if (e == 0) {
		r = 1;
	}
}
console.log(r);

/*
2- Converta um número decimal para binário.
	8 - "1000"
	10 - "1010"
*/

var n = parseInt(prompt("n:"));
var r="";
var i = 1;
while (i 1) {
	r = n/2;
	s = ""+(r%2);
}
console.log(s);

//vetores: fazer um programa que calcule a media de 4 numeros (com vetores)

var vetor = [5,8,9,2]
var media = 0;
for(var i=0; i<vetor.length;i++) {
	media = media+vetor[i];
}
console.log(media/(vetor.length));


/*
vetor = [9,5,2,7,4,10,6,8];
1) Apresente todos os numeros multiplicados por 2
2) Qual é o maior valor deste conjunto
3) E em que indice está este valor
4) Qual é o menor valor
5) Troque o maior valor pelo menor valor 
*/

//1)
var vetor = [9,5,2,7,4,10,6,8];
console.log(vetor);
for(var i=0; i<vetor.length; i++) {
	console.log(vetor[i]*2);
}

//2
var vetor = [9,5,2,7,4,10,6,8];
console.log(vetor);
var maior = 0;
for (var i = 0; i < vetor.length; i++) {
	if(vetor[i]>maior){
		maior = vetor[i];
	}
}
console.log(maior);

//3
var vetor = [9,5,2,7,4,10,6,8];
console.log(vetor);
var maior = 0;
var indice = 0;
for (var i = 0; i < vetor.length; i++) {
	if(vetor[i]>maior){
		maior = vetor[i];
		indice=("Indice: "+i);
	}
}
console.log(maior);
console.log(indice);
//4
var vetor = [9,5,2,7,4,10,6,8];
console.log(vetor);
var menor = 11;
for (var i = 0; i < vetor.length; i++) {
	if(vetor[i]<menor){
		menor = vetor[i];
	}
}
console.log(menor);

//5
var vetor = [9,5,2,7,4,10,6,8];
console.log(vetor);
var maior = 0;
var menor = 11;
var indicemenor = 0;
var indicemaior = 0;
var s =0;
for (var i = 0; i < vetor.length; i++) {
	if(vetor[i]>maior){
		maior = vetor[i];
		indicemaior = i;
	}
	if(vetor[i]<menor){
		menor = vetor[i];
		indicemenor = i;
	}
}
s = menor;
vetor[indicemenor] = maior;
vator[indicemaior] = s;
console.log(vetor);
