// let primeiroNome = "Igor"

// let sobreNome = "Araújo"

// let campoDeEstudo = "programação"

// let anoNascimento = 2000
// let anoAtual = 2024
// let dataDeNascimente = anoAtual - anoNascimento

// console.log(`Nome: ${primeiroNome} ${sobreNome} \n Campo de Estudo:
// ${campoDeEstudo} \n Idade: ${dataDeNascimente}`)

let valor1 = parseFloat(prompt("Qual o primeiro valor?"))
let valor2 = parseFloat(prompt("Qual o segundo valor?"))

let soma = valor1 + valor2
let subtracao = valor1 - valor2
let multiplicacao = valor1 * valor2
let divisao = valor1 / valor2

alert(`Soma: ${soma} \n 
Subtração: ${subtracao} \n
Multiplicação: ${multiplicacao} \n
Divisão: ${divisao.toFixed(3)}`)