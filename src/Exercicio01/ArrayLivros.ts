import { Livro } from "../Utils";

const biblioteca: Array<Livro> = [
  {
    nome: "Devoradores de Estrelas",
    preco: 29.99,
    categoria: "Ficção Científica",
  },
  {
    nome: "A culpa é das estrelas",
    preco: 42.99,
    categoria: "Romance",
  },
  {
    nome: "O Senhor dos Anéis",
    preco: 26.99,
    categoria: "Aventura",
  },
];

//Imprime a lista de livros
biblioteca.forEach((livro) => {
  console.log(`Nome: ${livro.nome}`);
  console.log(`Preço: R$ ${livro.preco}`);
  console.log(`Categoria: ${livro.categoria}`);
  console.log("------------------------");
});
