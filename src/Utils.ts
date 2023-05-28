export interface Livro {
  nome: string;
  preco: number;
  categoria: string;
}

export interface Autor {
  nome: string;
  idade: number;
}

export enum Categoria {
  FICCAO = "Ficção Científica",
  ROMANCE = "Romance",
  AVENTURA = "Aventura",
  OUTROS = "Terror",
}

export const Biblioteca: Array<Livro> = [
  {
    nome: "Duna",
    preco: 29.99,
    categoria: Categoria.FICCAO,
  },
  {
    nome: "A culpa é das estrelas",
    preco: 42.99,
    categoria: Categoria.ROMANCE,
  },
  {
    nome: "Interestelar",
    preco: 42.99,
    categoria: Categoria.FICCAO,
  },
  {
    nome: "O Senhor dos Anéis",
    preco: 26.99,
    categoria: Categoria.AVENTURA,
  },
];
