import { Biblioteca } from "../Utils";

Biblioteca.forEach((livro) => {
  const nomeFormatado = livro.nome.includes(" ")
    ? livro.nome.toLowerCase()
    : livro.nome.toUpperCase();
  console.log(`Nome: ${nomeFormatado}`);
  console.log(`Preço: R$ ${livro.preco}`);
  console.log(`Categoria: ${livro.categoria}`);
  console.log("------------------------");
});
