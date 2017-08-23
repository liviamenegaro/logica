var matriz = [[1,2,3], [4,5,6], [7,8,9]];
function diagonal(matriz) {
  var vetor = [];
  for (var i = 0; i < matriz.length; i++) {
    vetor[i] = matriz[i][i];
  }
  return vetor;
}
diagonal(matriz);
