import { Curso } from "./Curso";

export enum Turno {
  MANHA = "Manhã",
  TARDE = "Tarde",
  NOITE = "Noite",
}

function validarTamanho(minLength: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSetter = descriptor.set; // Salva o setter original

    if (!originalSetter) {
      throw new Error(`O método set para a propriedade ${propertyKey} não está definido.`);
    }

    descriptor.set = function (value: string) {
      if (value.length < minLength) {
        throw new Error(
          `O tamanho mínimo de caracteres para ${propertyKey} é ${minLength} => (${value} = ${value.length}).`
        );
      }

      // Chama o setter original
      originalSetter.call(this, value);
    };

    return descriptor;
  };
}

export class Turma {
  private static idCounter: number = 0;

  readonly id: number;
  private _descricao: string;
  private _turno: Turno;
  private _curso: Curso;

  constructor(descricao: string, turno: Turno, curso: Curso) {
    this.id = ++Turma.idCounter;
    this._descricao = descricao;
    this._turno = turno;
    this._curso = curso;
  }

  get descricao(): string {
    return this._descricao;
  }

  @validarTamanho(10)
  set descricao(value: string) {
    this._descricao = value;
  }

  get turno(): Turno {
    return this._turno;
  }

  set turno(value: Turno) {
    this._turno = value;
  }

  get curso(): Curso {
    return this._curso;
  }

  set curso(value: Curso) {
    this._curso = value;
  }

  imprimir(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Descrição: ${this.descricao}`);
    console.log(`Turno: ${this.turno}`);
    console.log(`Curso: ${this.curso.descricao} (${this.curso.area})`);
  }
}
