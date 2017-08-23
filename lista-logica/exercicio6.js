var string1 = prompt("string 1:");
var string2 = prompt("string 2:");
function compara(string1, string2) {
  if (string1.toUpperCase() == string2.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
compara(string1, string2);
