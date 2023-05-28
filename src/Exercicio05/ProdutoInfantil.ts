import { Produto, Status } from "./Produto";

export class ProdutoInfantil extends Produto {
  private _faixaEtaria!: number;

  constructor(nome: string, categoria: string, preco: number, status: Status, faixaEtaria: number) {
    super(nome, categoria, preco, status);
    this.setFaixaEtaria = faixaEtaria;
  }

  private verificarFaixaEtaria() {
    if (!this.isValidaFaixaEtaria(this._faixaEtaria)) {
      throw new Error("A faixa etária para produtos infantis deve ser até 12 anos.");
    }
  }

  get getFaixaEtaria(): number {
    return this._faixaEtaria;
  }

  set setFaixaEtaria(faixaEtaria: number) {
    this._faixaEtaria = faixaEtaria;
    this.verificarFaixaEtaria();
  }
}
