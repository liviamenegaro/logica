/*
EXEMPLO DE MATRIZ:
m = [[1,2,3], [4,5,6], [7,8,9]]
for(i=0;i<m.length;i++) {
	for(var j=0; j<m[0].length;j++) {
		console.log("coluna j:" +j+ " linha:"+i+""+m[i][j])
	}
}
*/

/*
1- Exercícios:

1 Multiplicar todos os elemntos da matriz 4X4 por 2

*/
var m = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
console.log(m);
for(var i=0; i<m.length;i++) {
	for(var j=0; j<m[0].length;j++) {
		m[i][j] = m[i][j]*2;
	}
}
console.log("\n"+m);

/*

2- Somar duas matrizes 3X3

*/
var m1 = [[1,2,3], [4,5,6], [7,8,9]];
var m2 = [[1,2,3], [4,5,6], [7,8,9]];
var m3 = [[],[],[]];
console.log("m1:"+m1+"\nm2:"+m2);
for(var i=0; i<m1.length;i++) {
	for(var j=0; j<m1[0].length; j++) {
		m3[i][j] = m1[i][j] + m2[i][j];
		m1[i][j] += m2[i][j];
	}
}
console.log("m3: "+m3);

/*

3- Calcular a soma das diagonais de uma matriz

*/
1 2 3 
4 5 6
7 8 9
var m1 = [[1,2,3], [4,5,6], [7,8,9]];
var diagonal = 0;
for (var i = 0; i < m1.length; i++) {
	for (var j= 0; j < m1[0].length; j++) {
		if(m1[i] == m1[j]) {
			diagonal += m1[i][j];
		}
	}
	for (var k=m1.length; k>=0;k--) {
		if(m1[i] == m1[k]) {
			diagonal += m1[i][k];
		}
	}
}
console.log(diagonal);