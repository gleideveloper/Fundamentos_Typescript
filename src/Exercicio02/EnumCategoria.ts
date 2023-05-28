import { Biblioteca } from "../Utils";

//Imprime a lista de livros com Categoria com seus Enums
Biblioteca.forEach((livro) => {
  console.log(`Nome: ${livro.nome}`);
  console.log(`Preço: R$ ${livro.preco}`);
  console.log(`Categoria: ${livro.categoria || "N/A"}`);
  console.log("------------------------");
});
