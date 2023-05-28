//Cria um instancia de Produto
// import { Produto } from "./Produto";
import { ProdutoInfantil } from "./ProdutoInfantil";

// Cria um instancia de Produto
// const shampoo = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
// console.log(`Código: ${shampoo.getCodigo}`);
// console.log(`Nome: ${shampoo.getNome}`);
// console.log(`Preço: ${shampoo.getPreco}`);
//Cria um instancia de ProdutoInfantil

const shampoo = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 10);
console.log(`Código: ${shampoo.getCodigo}`);
console.log(`Nome: ${shampoo.getNome}`);
console.log(`Preço: ${shampoo.getPreco}`);
console.log(`Faixa Etária: ${shampoo.getFaixaEtaria}`);
console.log(`Status: ${shampoo.getStatus}`);
shampoo.setFaixaEtaria = 11;
console.log(`Nova Faixa Etária: ${shampoo.getFaixaEtaria}`);
