export enum Area {
  HUMANAS = "Humanas",
  BIOLOGICAS = "Biológicas",
  EXATAS = "Exatas",
  AGRARIAS = "Agrárias",
}

export class Curso {
  private _descricao: string;
  private _area: Area;

  constructor(descricao: string, area: Area) {
    this._descricao = descricao;
    this._area = area;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }

  get area(): Area {
    return this._area;
  }

  set area(value: Area) {
    this._area = value;
  }
}
