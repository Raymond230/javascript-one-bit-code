let turista = prompt("Qual o seu nome?");
let cidades = "";
let contagem = 0;
let continuar = prompt("Você já visitou alguma cidade?");

while (continuar === "sim") {
  let cidade = prompt("qual o nome da cidade?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("você visitou alguma outra cidade? (sim/não)");
  break;
}

alert("\nTurista:" + turista + "\ncidades:" + contagem + "\ncidades" + cidades);
