const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//adicionando Elementos
//push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift

tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

//remover elementos

const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

const inclui = arr.includes("Gandalf")
console.log(inclui)

//index of

const indice = arr.indexOf("Gandalf")
console.log(indice)

//cortar e concatenar
//slice

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)

//concat

const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// substituição dos elementos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os Elementos

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + "se encontra na posição" + indice)
}















