function calcular(a, b, operacao) {
  console.log("realizando uma operação");
  const resultado = operacao(a, b);
  return resultado;
}
function somar(x, y) {
  console.log("realizando uma soma");
  return x + y;
}
calcular(3, 5, somar);
