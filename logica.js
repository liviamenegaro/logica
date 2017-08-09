
// 1- Fazer uma função eh_par(numero), retorna verdadeiro se numero é par

function eh_par(numero) {
  return numero%2 == 0;
}
var numero = parseInt(prompt("numero"));
alert(eh_par(numero));

// 2- Fazer uma função que retorne se um número é zero, negativo ou positivo. Como fazer
// para retornar uma variável com 3 valores? Pensar...

function retorna(numero) {
  if (numero === 0) return "zero";
  if (numero < 0) return "negativo";
  if (numero > 0) return "positivo";
}
var numero = parseInt(prompt("numero"));
alert(retorna(numero));

// 3- Fazer uma função que retorne o maior número em uma série de valores (vetores)

function amigaozao(vetor) {
  var maior = vetor[0];
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) maior = vetor[i];
  }
  return maior;
}
var vetor = [0,1,2,3,4,5];
alert(amigaozao(vetor));

//4- Fazer uma função que calcule a área de um triangulo-retangulo

function pitagoras(base,altura) {
  return (base*altura)/2;
}
var base = parseInt(prompt("base:"));
var altura = parseInt(prompt("altura:"));
alert(pitagoras(base,altura));

//5- Fazer uma função que retorne quantas vogais existem em uma palavra

function spb_5(palavra) {
  var cont=0;
  for (var i = 0; i < palavra.length; i++) {
    if ((palavra[i] == "a") || (palavra[i] == "e") || (palavra[i] == "i") ||
        (palavra[i] == "o") || (palavra[i] == "u")) {
      cont++;
    }
  }
  return cont;
}
var palavra = prompt("palavra:");
alert(spb_5(palavra));

// 6- Fazer uma função que calcule o imposto que um trabalhador irá pagar. Se o
//salário for < 1200, imposto de 12%. Se for entre 1200 a 3500, 20%. Se o salário
//for >=3500, imposto de 27,5%

function petrobras(salario) {
  if (salario < 1200) return salario * (12/100);
  if (salario >= 1200 && salario < 3500) return salario * (20/100);
  if (salario >= 3500) return salario * (27.5/100);
}
var salario = parseInt(prompt("salario:"));
alert(petrobras(salario));

//7- Fazer uma função que conte quantos números impares existe em um vetor,
//usando a função eh_par do numero 1.

function eh_par(numero) {
  return numero%2 == 0;
}
function eh_impar(vetor) {
  var cont = 0;
  for (var i = 0; i < vetor.length; i++) {
    if (eh_par(vetor[i]) === false) cont++
  }
  return cont;
}
var vetor = [0,1,2,3,4];
alert(eh_impar(vetor));

//8- Fazer uma função que copia dois vetores

function copia(vetor) {
  var v = [];
  v = vetor
  return v;
}
alert(copia(vetor));

//9- Fazer uma função que remove um dado em um vetor, passando ele como parâmetro.
// Retorne verdadeiro se ele existe e foi removido com sucesso, ou falso se o valor
//não existe.

function remove(valor) {
  var nada = 0;
  for (var i = 0; i < vetor.length; i++) {
    if(vetor[i] == valor) {
      vetor.pop(valor);
      nada = 1;
    }
  }
  if (nada === 1) return true;
  if (nada != 1) return false;
}
var vetor = [1,2,3,4,5]
var valor = parseInt(prompt("valor:"));
alert(remove(valor))
