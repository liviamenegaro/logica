var vetor = [1,2,3,4,5];
var media=0;
function calculeMedia(vetor) {
  for (var i = 0; i < vetor.length; i++) {
    media += vetor[i]
  }
  return media/vetor.length;
}
calculeMedia(vetor);
