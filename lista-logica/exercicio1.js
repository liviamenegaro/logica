var n_inicio = parseInt(prompt("inicio: "));
var n_fim = parseInt(prompt("fim: "));
var cont = n_inicio;
var numero = 0;
function divisores(n_inicio, n_fim) {
  while (cont <= n_fim) {
    if (cont%3 === 0) {
      numero++;
      cont++;
    }
    else {
      cont++;
    }
  }
  return numero;
}
divisores(n_inicio,n_fim);
