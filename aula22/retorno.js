function calcularMedia(a, b) {
  const media = (a + b) / 2;
  console.log(media);
  return media;
}
const resultado = calcularMedia(7, 2);
console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}
//const notebook = criarProduto("Notebook Intel core i3 8GB", 2500);
//ou
console.log(criarProduto("Notebook Intel core i3 8GB", 2500));

function areaRetangular(base, altura) {
  const area = base * altura;
  console.log(area);
  return area;
}
const valorDaArea = areaRetangular(8, 2);

function ola() {
  let texto = "...";
  texto = "Olá mundo";
  return texto;
  console.log(texto);
}
console.log(ola());

function maioridade(idade) {
  if (idade >= 18) {
    return "maior de idade";
  } else {
    return "voce ainda é menor";
  }
}
console.log(maioridade(29));
console.log(maioridade(13));
