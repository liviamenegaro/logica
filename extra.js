//1
var numero = parseInt(prompt("número:"));
var somatorio = 0;
var fatorial = 1;
for (var i = 1; i <= numero; i++) {
  fatorial = fatorial*i;
  somatorio = somatorio + ((6*(Math.pow(i,2)))/fatorial);
}
console.log(somatorio);

//2
var numero = parseInt(prompt("número:"));
var somatorio = 0;
for (var i = 0; i <= numero; i++) {
  somatorio = somatorio+ ((Math.pow(-1,i))/((2*i)+1));
}
console.log(4*somatorio);
