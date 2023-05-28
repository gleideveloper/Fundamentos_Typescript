export type Status = "EM_ESTOQUE" | "ESGOTADO";
export class Produto {
  private _codigo: number;
  private _nome: string;
  private _categoria: string;
  private _preco: number;
  private _status: Status;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this._codigo = this.gerarCodigo();
    this._nome = nome;
    this._categoria = categoria;
    this._preco = preco;
    this._status = status;
  }

  // Lógica para gerar o código do produto
  protected gerarCodigo(): number {
    return Math.floor(Math.random() * 1000);
  }

  get getCodigo(): number {
    return this._codigo;
  }

  get getNome(): string {
    return this._nome;
  }

  set setNome(nome: string) {
    this._nome = nome;
  }

  get getCategoria(): string {
    return this._categoria;
  }

  set setCategoria(categoria: string) {
    this._categoria = categoria;
  }

  get getPreco(): number {
    return this._preco;
  }

  set setPreco(preco: number) {
    this._preco = preco;
  }

  get getStatus(): string {
    return this._status;
  }

  set setStatus(status: Status) {
    this._status = status;
  }

  protected isValidaFaixaEtaria(faixaEtaria: number): boolean {
    return faixaEtaria <= 12;
  }

  protected adicionar(): void {
    this.mudarStatus("EM_ESTOQUE");
    console.log(`Produto ${this._nome}, categoria:
    ${this._categoria}`);
  }

  protected mudarStatus(status: Status): void {
    if (status === "EM_ESTOQUE") {
      this._status = "EM_ESTOQUE";
    } else {
      this._status = "ESGOTADO";
    }
  }
}
