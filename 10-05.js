/*1- Fazer um programa que faça uma Progressão aritmética no passo = 4,
 de 0 a 20 e depois seu passo permanece e, 2, até 100
 Ex: 0,4,8,12,16,20,22,24,...,100*/

var passo = 4;
var pa = 0;
console.log(pa);
while(pa < 100) {
  if (pa == 20) {
    passo = 2;
  }
  console.log(pa = pa+passo);
}

/*
2- Apresentar progressão geométrica com razão 3, com 10 termos, iniciando em 1.
Exemplo: 1,3,9,27,...
*/
var razao = 3;
var pg = 1;
for(var i = 0; i <= 10; i++) {
  console.log(pg = pg*razao);
}


/*
3- Faça um script que receba um número e desenhe na tela um triângulo de asteriscos
com o número de linhas sendo igual ao número recebido, e o número de asteriscos aumentando em
1 por linha. Por exemplo, caso o número recebido seja 5:
*
**
***
****
*****
*/
var numero = parseInt(prompt("numero:"));
var string = "";
var i = 0
while(i < numero){
  string = string + "*";
  i++;
  console.log(string+"\n");
}

/*
Desenhar um retangulo, de acordo com sua altura e largura. Exemplo largura 4 e atura 5
****
****
****
****
****
*/

var largura = parseInt(prompt("largura:"));
var altura = parseInt(prompt("altura:"));
var string = "";
var i =0;
for (var i = 0; i < largura; i++) {
  string = string+"*";
}
for (var j=0; j<altura;j++){
  console.log(string);
}
