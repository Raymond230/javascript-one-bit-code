const veiculo1 = prompt("informe o nome do primeiro veículo ");
const velocidade1 = prompt("informe a velocidade do primeiro veículo");

const veiculo2 = prompt("informe o nome do segundo veículo");
const velocidade2 = prompt("informe a velocidade do segundo veículo veículo");

if (veiculo1 > velocidade2) {
  alert(veiculo1 + "é mais rapido que " + veiculo2);
} else if (velocidade2 > velocidade1) {
  alert(veiculo2 + "é mais rapido que" + veiculo1);
} else {
  alert(veiculo1 + "e" + veiculo2 + "tem a mesma velocidade");
}
