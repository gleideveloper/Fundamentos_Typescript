export abstract class Conta {
  protected saldo: number;

  constructor(saldoInicial: number = 0) {
    this.saldo = saldoInicial;
  }

  abstract sacar(valor: number): void;
  abstract depositar(valor: number): void;
}
