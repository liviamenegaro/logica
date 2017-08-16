/*
Exercício 16/08/2017

1- Fazer uma função (que não retorna valor (procedimento)) que apresente uma tabuada definida por n. Se n for -1, apresentar toda a tabuada de 0 a 10.

2- Fazer uma função que apresente uma String em maiusculo

3- Fazer uma função autentica, que retorne true se a palavra dada no parametro da função seja igual a uma senha e false se não for igual.

4- Fazer uma função que imprima a tabela ASCII. Use String.fromCharCode(valorascii)

5- Fazer uma função que faça a concatenação de dois vetores. Passar dois vetores por parametro e retornar o vetor de tamanho (v1.length + v2.length)

6- Fazer uma função que retorne a posição do maior elemento dentro de um vetor.

7- Fazer uma função menu. Esta função deverá passar o texto por parametro e fazer com que o usuario leia a opção. Caso a opção for aceita, retornar o numero da opção digitada. Se a opção do menu for < 0 ou > 10. Retorne -1, como acusação de erro*/

//1
function tabuada(numero) {
  if (numero>=0) {
    for (var i = 0; i <= 10; i++) {
      console.log(numero+"x"+i+"= "+numero*i+"\n");
    }
  }
  if (numero < 0) {
    var cont = 0;
    while (cont<=10) {
      for (var i = 0; i <= 10 ; i++) {
        console.log("TABUADA DO "+cont+"\n"+cont+"x"+i+" = "+cont*i+"\n")
      }
      cont++;
    }
  }
}
var numero = parseInt(prompt("numero:"));
tabuada(numero);

//2
function maiusculo(string) {
  return string.toUpperCase();
}
var string = prompt("string:");
maiusculo(string);

//3
function acerta(palavra) {
 var senha = "hehehe";
 if (palavra === senha) return true;
 if (palavra != senha) return false;
}
var palavra = prompt("palavra:");
acerta(palavra);

//4
function ascii() {
  for (var i = 0; i < 256; i++) {
    console.log(String.fromCharCode(i)+" = "+i);
  }
}
ascii();

//5
function concatena(vetor1, vetor2) {
  return vetor1+","+vetor2;
}
var vetor1 = [1,2,3,4];
var vetor2 = [1,2,3,4];
concatena(vetor1, vetor2);

//6
function posicao(vetor) {
  var maior = vetor[0];
  var cont = 0;
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i];
      cont = i;
    }
  }
  return cont;
}
var vetor = [1,2,3,4,5];
posicao(vetor);

//7






19:35
