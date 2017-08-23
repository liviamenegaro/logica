var vetor = [1,2,3,4,5];
var maior = vetor[0];
var segundoMaior = vetor[0];
function segundoMaiorValor(vetor) {
    for (var i = 0; i < vetor.length; i++) {
      if (vetor[i]>maior) {
        segundoMaior = maior;
        maior = vetor[i];
      }
      if ( vetor[i] < maior) segundoMaior = vetor[i];
    }
    return segundoMaior;
}
segundoMaiorValor(vetor);
