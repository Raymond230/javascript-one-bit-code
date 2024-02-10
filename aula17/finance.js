let saldo = prompt("informe a quantidade de dinheiro inicial:");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt;
  "Saldo disponivel: R$" +
    saldo +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. sair";
  switch (opcao) {
    case "1":
      saldo += prompt("Informe o valor a se adicionado:");
      break;
    case "2":
      saldo = prompt("Informe o valor a ser removido:");
      break;
    case "3":
      alert("saindo...");
      break;
      alert("opção invalida");
  }
} while (opcao !== "3");
