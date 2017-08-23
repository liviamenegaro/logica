// ESSA CARALHA NÃO TO FUNCIONANDO PORRA


function subtracao(vet1,vetasa) {
  var vetor = [];
  for (var i = 0; i < vet1.length; i++) {
    if (vet1[i] != vetasa[i]) {
        vetor[i] = vet1;
    }
  }
  return vetor;
}
var vet1 = [2,5,4,6,9];
var vetasa = [1,2,3,4,5];
subtracao(vetor);
