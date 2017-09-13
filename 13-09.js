// 1- Fazer um programa que cadastre um lutador. O lutador tem código (automatico e incremental), nome, força (0 - 10), inteligencia (0-10) e velocidade (0-10). O cáculo para batalha é:
//
// força de guerra = velocidade+1.5 * (inteligencia + (0.5*Math.random())) +2.0*força.
//
// i) Apresentar qual é o maior lutador de todos!! (vencedor)
// ii) o perdedor!!
// iii) o mais fraco
// iv)o mais inteligente
// v) o mais rápido

var vet_codigo = [];
var vet_nome = [];
var vet_forca = [];
var vet_inteligencia = [];
var vet_velocidade = [];

function menu() {
  do{
    var option = parseInt(prompt(" 37 ANOS CARALHO!!\n 1 - Cadastro\n 2 - Pesquisa\n 0 - Sair"));
    switch (option) {
      case 1: cadastro(); break;
      case 2: pesquisa(); break;
    }
  }while(option != 0)
}

function cadastro() {
  alert("TU ESCOLHEU O CADASTRO VIVENTE! SIMBORA");
  var codigo = parseInt(prompt("Passa o código desse guri: "));
  vet_codigo.push(codigo);
  var nome = prompt("Qualé o nome desse guri? Conta pra gente");
  vet_nome.push(nome);
  var forca = parseInt(prompt("De 0 a 10, fala como esse guri é bagual"));
  vet_forca.push(forca);
  var inteligencia = parseInt(prompt("De 0 a 10, esse guri foi pra escola ou não?"));
  vet_inteligencia.push(inteligencia);
  var velocidade = parseInt(prompt("De 0 a 10, tu me fala se esse guri sabe correr"));
  vet_velocidade.push(velocidade);
}

function pesquisa() {
  do {
    var opcao = parseInt(prompt("TU ESCOLHEU A PESQUISA, AGORA TE JOGA\n\n 1 - Maior lutador de todos\n 2 - Perdedor\n 3 - Mais fraco\n 4 - Mais inteligente\n 5 - Mais rápido\n 0 - Sair"));
    switch (opcao) {
      case 1: fodao(); break;
      case 2: loser(); break;
      case 3: fracote(); break;
      case 4: tvsmart(); break;
      case 5: theflash(); break;
    }
  } while (opcao != 0);
}

function fodao() {
  var maior = vet_velocidade[0]+1.5 * (vet_inteligencia[0] + (0.5*Math.random())) +2.0*vet_forca[0];
  var n = "";
  for (var i = 0; i < vet_nome.length; i++) {
    var hehe = vet_velocidade[i]+1.5 * (vet_inteligencia[i] + (0.5*Math.random())) +2.0*vet_forca[i]
    if ( hehe >= maior) {
      maior = hehe
      n = vet_nome[i];
    }
  }
  alert("AND THE WINNER IS .....\n\n "+n);
}

function loser() {
  var menor = vet_velocidade[0]+1.5 * (vet_inteligencia[0] + (0.5*Math.random())) +2.0*vet_forca[0];
  var n = "";
  for (var i = 0; i < vet_nome.length; i++) {
    var hoho = vet_velocidade[i]+1.5 * (vet_inteligencia[i] + (0.5*Math.random())) +2.0*vet_forca[i]
    if (hoho < menor) {
      menor = hoho
      n = vet_nome[i];
    }
  }
  alert("AND THE LOSER IS .....\n\n "+n.toUpperCase()+"\n\n DESONRA!! DESONRA PRA TU, DESONRA PRA TUA VACA");
}

function fracote() {
  var fraco = vet_forca[0];
  var n = "";
  for (var i = 0; i < vet_forca.length; i++) {
    if (vet_forca[i] <= fraco) {
      fraco = vet_forca[i];
      n = vet_nome[i];
    }
  }
  alert("E O MAIS FRACO DE TODOS ESSES AÍ É... \n\n "+n);
}

function tvsmart() {
  var intel = vet_inteligencia[0];
  var n = "";
  for (var i = 0; i < vet_inteligencia.length; i++) {
    if (vet_inteligencia[i] >= intel) {
      intel = vet_inteligencia[i];
      n = vet_nome[i];
    }
  }
  alert("E O GURI QUE FOI PRA ESCOLA POR MAIS TEMPO FOI... \n\n "+n);
}

function theflash() {
  var barry = vet_velocidade[0];
  var n = "";
  for (var i = 0; i < vet_velocidade.length; i++) {
    if (vet_velocidade[i] >= barry) {
      barry = vet_velocidade[i];
      n = vet_nome[i];
    }
  }
  alert("E O BARRY ALLEN DO RIO GRANDE DO SUL É... \n\n "+n);
}

menu();
