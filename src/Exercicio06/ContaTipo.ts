import { Conta } from "./Conta";

export class ContaPF extends Conta {
  private cpf: string;
  private nome: string;

  constructor(cpf: string, nome: string, saldoInicial: number = 0) {
    super(saldoInicial);
    this.cpf = cpf;
    this.nome = nome;
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente.");
      return;
    }

    this.saldo -= valor;
    console.log(
      `Saque de R$${valor} realizado na conta de ${this.nome}. Saldo atual: R$${this.saldo}`
    );
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(
      `Depósito de R$${valor} realizado na conta de ${this.nome}. Saldo atual: R$${this.saldo}`
    );
  }
}

export class ContaPJ extends Conta {
  private cnpj: string;
  private nomeFantasia: string;

  constructor(cnpj: string, nomeFantasia: string, saldoInicial: number = 0) {
    super(saldoInicial);
    this.cnpj = cnpj;
    this.nomeFantasia = nomeFantasia;
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente.");
      return;
    }

    this.saldo -= valor;
    console.log(
      `Saque de R$${valor} realizado na conta da empresa ${this.nomeFantasia}. Saldo atual: R$${this.saldo}`
    );
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(
      `Depósito de R$${valor} realizado na conta da empresa ${this.nomeFantasia}. Saldo atual: R$${this.saldo}`
    );
  }
}
