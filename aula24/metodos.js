let pessoa = {
  nome: "igor",
  idade: "23",
  dizerOla() {
    console.log("Olá mundo! meu nome é:" + this.nome);
  },
};

console.log(pessoa);
pessoa.dizerOla();
