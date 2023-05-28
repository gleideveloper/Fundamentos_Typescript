import { Conta } from "./Conta";
import { ContaPF } from "./ContaTipo";

export class Cliente {
  private nome: string;
  private contas: Array<Conta>;

  constructor(nome: string) {
    this.nome = nome;
    this.contas = [];
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }

  exibirContas(): void {
    console.log(`Contas do cliente ${this.nome}:`);
    this.contas.forEach((conta, index) => {
      console.log(`[${index + 1}] ${conta instanceof ContaPF ? "Conta PF" : "Conta PJ"}`);
    });
  }
}
