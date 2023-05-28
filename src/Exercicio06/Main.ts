import { Conta } from "./Conta";
import { Cliente } from "./Cliente";
import { ContaPF, ContaPJ } from "./ContaTipo";

// Criando os clientes
const cliente1 = new Cliente("João");
const cliente2 = new Cliente("Maria");

// Criando as contas
const conta1 = new ContaPF("123.456.789-00", "João da Silva");
const conta2 = new ContaPJ("79.546.795/0001-00", "Empresa Morada Das Artes Festa & Eventos");
const conta3 = new ContaPJ("12.345.678/0001-00", "Empresa Conservatorio de Musica do Amazonas");

// Adicionando contas aos clientes
cliente1.adicionarConta(conta1);
cliente2.adicionarConta(conta2);

// Realizando operações nas contas
conta1.depositar(1000);
conta1.sacar(500);

conta2.depositar(2000);
conta2.sacar(1000);

// Exibindo as contas de cada cliente
cliente1.exibirContas();
cliente2.exibirContas();
