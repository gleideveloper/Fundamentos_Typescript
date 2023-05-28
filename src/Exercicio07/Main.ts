import { Turma, Turno } from "./Turma";
import { Curso, Area } from "./Curso";
import { GerenciadorTurmas } from "./GerenciadorTurmas";

//Instanciando o gerenciador de turmas
const gerenciador = new GerenciadorTurmas();

//Instanciando os cursos
const curso1 = new Curso("Engenharia Cumputação", Area.EXATAS);
const curso2 = new Curso("Administração", Area.HUMANAS);
const curso3 = new Curso("Engenharia Agrícola", Area.AGRARIAS);
const curso4 = new Curso("Medicina", Area.BIOLOGICAS);

//Instanciando as turmas
const turma1 = new Turma("Turma A", Turno.MANHA, curso1);
const turma2 = new Turma("Turma B", Turno.TARDE, curso2);
const turma3 = new Turma("Turma C", Turno.NOITE, curso3);
const turma4 = new Turma("Turma D", Turno.NOITE, curso4);

//Add Turmas
gerenciador.adicionarTurma(turma1);
gerenciador.adicionarTurma(turma2);
gerenciador.adicionarTurma(turma3);
gerenciador.adicionarTurma(turma4);

console.log("\nImprimindo todas as turmas:");
gerenciador.imprimirTurmas();

console.log("\nExcluindo a Turma B:");
gerenciador.excluirTurma(turma2.id);

console.log("\nAlterando informações da Turma A:");
turma1.descricao = "Turma Falso vzxfvdvs";
turma1.turno = Turno.TARDE;
turma1.curso.descricao = "Análise de Sistemas";
gerenciador.alterarTurma(turma1.id, turma1);

console.log("\nImprimindo as turmas após exclusão e alteração:");
gerenciador.imprimirTurmas();
