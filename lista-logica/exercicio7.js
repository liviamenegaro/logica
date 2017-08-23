var idade = parseInt(prompt("Informe sua idade: "));
var vetor = ["infantil A", "infantul B", "juvenil A", "juvenil B", "adulto"];

function categorias(idade) {
  if (idade >= 5 && idade <=7) return console.log(vetor[0]);
  if (idade >= 8 && idade <=10) return console.log(vetor[1]);
  if (idade >= 11 && idade <=13) return console.log(vetor[2]);
  if (idade >= 14 && idade <=17) return console.log(vetor[3]);
  if (idade >= 18) return console.log(vetor[4]);
}
categorias(idade);
