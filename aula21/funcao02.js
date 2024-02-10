function dobro(x) {
  alert("o dobro de " + x + " é " + x * 2);
}
//dobro(5);
//dobro(7);

function dizerOla(nome = "mundo") {
  alert(" olá " + nome + "!");
}
//dizerOla(" igor ");
//dizerOla();

function soma(a, b) {
  alert(" O resultado da soma é " + (a + b));
}
//soma(10012, 9999);

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

function novoUsuario(nome, tpo = "admin", email, senha) {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

criarUsuario("Raimundo", "igoroliveira273@gmail.com", "1234");
novoUsuario("Raimundo", "admin", "igoroliveira273@hmail.com", "1234");

function muitosParametros(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {}
function objetosComoParametro(usuario) {
  usuario.nome;
  usuario.email;
}
muitosParametros("nome", "telefone", "aniversario", "email", "senha");
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
};

objetosComoParametro(dadosDoUsuario);
