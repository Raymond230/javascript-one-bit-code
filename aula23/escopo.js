let pokemon = "chamander";

function evoluir() {
  pokemon = "charmeleon";
}

console.log(pokemon);
evoluir();
console.log(pokemon);

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true;
    let situacao = "aprovado";
  } else {
    let reprovado = false;
    let situacao = "Reprovado";
  }
  console.log(nota);
  console.log(aprovado);
  console.log(situacao);
}
avaliarNota(83);
avaliarNota(49);
