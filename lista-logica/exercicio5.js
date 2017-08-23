//ESSA CARALHA AQUI TBM NÃO TÁ FUNCIONANDO


var vetor = ["Azul", "Amarelo", "Vermelho", "Branco", "Preto"];

function aleatorio(vetor) {
  var sorteio = Math.floor(Math.random()*5);
  return vetor[sorteio];
}
aleatorio(vetor);
