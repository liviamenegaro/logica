/*
EXERCICIO 6 9 2017

1 - Fazer um programa de cadastro de aluno. Cada aluno deverá ter o campo código, nome, 
e média global. Criar um programa que (usar funções. Pensar como utilizá-las)

i) tenha o menu a seguir:
    1 cadastro
    2 pesquisa

    No menu 2 deverá ter as seguintes opções:

        i)Pesquisar o nome do aluno que tem a média mais alta.
        ii) Pesquisar o nome do aluno que tem a média mais baixa
        iii) listar todos os alunos cadastrados, apresentando quem está aprovado ou
        reprovado
        iv) buscar o aluno por código
*/


var me = parseInt(prompt("Escolha a opção do menu: \n 1 - Cadastro \n 2 - Pesquisa \n 0 - Sair do menu"));
function menu(menu) {
    var matricula = [];
    var nome = [];
    var media = [];
    while (menu != 0) {
        if (menu === 1) {
            var q = parseInt(prompt("Quantos alunos deseja cadastrar?"));
            for (var i = 0; i < q; i++) {
                matricula[i] = prompt("Matrícula do " + i+1 + "º aluno:");
                nome[i] = prompt("Nome do " + i+1 + "º aluno:");
                media[i] = parseInt(prompt("Média global do " + i+1 + "º aluno:"));
            }
        }
        if (menu === 2) {
            var pesquisa = prompt("1) Aluno com a média mais alta.\n\n2) Aluno com a média mais baixa \n\n3) Alunos cadastrados \n\n4) Buscar o nome do aluno pela matrícula");
            var maior = media[0];
            var menor = media[0];
            var aluno = "";
            if (pesquisa === "1") {
                for (var i = 0; i < media.length; i++) {
                    if (media[i] >= maior) {
                        maior = media[i];
                        aluno = nome[i];
                    }
                }
                alert("Nome do aluno que possui a maior média global: "+aluno);
            }
            if (pesquisa === "2") {
                for (var i = 0; i < media.length; i++) {
                    if (media[i] <= menor) {
                        menor = media[i];
                        aluno = nome[i];
                    }
                }
                alert("Nome do aluno que possui a menor média global: "+aluno);
            }
            if (pesquisa === "3") {
                for (var i = 0; i < media.length; i++) {
                    if (media[i] >= 28) alert(nome[i] + " - APROVADO");
                    if (media[i] < 28) alert(nome[i] + " - REPROVADO");
                }
            }
            if (pesquisa === "4") {
                var matri = prompt("Informe a matrícula para a pesquisa:");
                var cont=0;
                for (var i = 0; i < matricula.length; i++) {
                    if (matricula[i] === matri) {
                        alert("Nome do aluno que tem a matrícula informada: "+nome[i]);
                    }
                    else cont++;
                }
                if (cont === matricula.length) alert("Nenhum aluno no nosso sistema possui a matrícula informada");
            }
        }
        menu = parseInt(prompt("Escolha a opção do menu: \n 1 - Cadastro \n 2 - Pesquisa \n 0 - Sair do menu"));
    }
    if (menu === 0) alert("Obrigada pelo acesso!");
}
menu(me);