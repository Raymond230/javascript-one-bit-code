const numero = prompt("Olá eu sou um robô");

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += "->" + numero + "*" + fator + "=" + numero * fator + "\n";
}
alert("Resultado de " + numero + ":\n\n" + resultado);
