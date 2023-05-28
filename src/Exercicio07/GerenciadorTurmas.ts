import { Turma, Turno } from "./Turma";
import { Curso } from "./Curso";

export class GerenciadorTurmas {
  private turmas: Array<Turma>;

  constructor() {
    this.turmas = [];
  }

  adicionarTurma(turma: Turma): void {
    this.turmas.push(turma);
  }

  excluirTurma(id: number): void {
    const index = this.turmas.findIndex((turma) => turma.id === id);
    if (index !== -1) {
      this.turmas.splice(index, 1);
    }
  }

  alterarTurma(id: number, turma: Turma): void {
    var hasTurma = this.turmas.find((turma) => turma.id === id);
    if (hasTurma) {
      turma.descricao = turma.descricao;
      turma.turno = turma.turno;
      turma.curso = turma.curso;
    }
  }

  buscarTurma(id: number) {
    const turma = this.turmas.find((turma) => turma.id === id);
    if (turma) {
      console.log(
        `Turma encontrada: ${turma.id} - Descrição: ${turma.descricao}`
      );
    } else {
      console.log(`Turma com o ID ${id} não encontrada.`);
    }
  }

  imprimirTurmas(): void {
    console.log("Turmas cadastradas:");
    this.turmas.forEach((turma) => turma.imprimir());
  }
}
