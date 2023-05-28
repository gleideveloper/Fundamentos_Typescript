import { Livro, Autor, Categoria } from "../Utils";

type AutorLivro = Autor | Livro;

const biblioteca1: AutorLivro[] = [
  { nome: "Autor 1", idade: 30 },
  { nome: "Livro 1", preco: 19.99, categoria: Categoria.FICCAO },
  { nome: "Livro 2", preco: 12.99, categoria: Categoria.AVENTURA },
];

const biblioteca2: AutorLivro[] = [
  { nome: "Autor 2", idade: 45 },
  { nome: "Livro 3", preco: 24.99, categoria: Categoria.ROMANCE },
  { nome: "Livro 4", preco: 14.99, categoria: Categoria.OUTROS },
];

const bibliotecas: Map<string, AutorLivro[]> = new Map();
bibliotecas.set("Biblioteca 1", biblioteca1);
bibliotecas.set("Biblioteca 2", biblioteca2);

bibliotecas.forEach((livros, biblioteca) => {
  console.log(`${biblioteca}:`);
  livros.forEach((item) => {
    if ("idade" in item) {
      console.log(`Autor - Nome: ${item.nome}, Idade: ${item.idade}`);
    } else {
      console.log(
        `Livro - Nome: ${item.nome}, Preço: R$ ${item.preco}, Categoria: ${item.categoria}`
      );
    }
  });
  console.log("------------------------");
});
