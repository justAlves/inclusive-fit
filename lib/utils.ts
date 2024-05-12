import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function greetings(): string {
  const horaAtual: number = new Date().getHours();

  if (horaAtual >= 6 && horaAtual < 12) {
      return "Bom dia!";
  } else if (horaAtual >= 12 && horaAtual < 18) {
      return "Boa tarde!";
  } else {
      return "Boa noite!";
  }
}

interface Atividade {
  nome: string;
  descricao: string;
}

export const atividadesLudicas: Atividade[] = [
  {
      nome: "Pintura com as mãos",
      descricao: "Deixe a pessoa expressar sua criatividade pintando com as mãos em papel ou tela."
  },
  {
      nome: "Dança livre",
      descricao: "Coloque música animada e convide a pessoa para dançar livremente, estimulando o movimento e a diversão."
  },
  {
      nome: "Jogo de memória",
      descricao: "Use cartas com imagens e divirta-se exercitando a memória e a concentração."
  },
  {
      nome: "Montagem de quebra-cabeça",
      descricao: "Escolha quebra-cabeças com poucas peças e monte-os junto com a pessoa, estimulando a coordenação motora e a resolução de problemas."
  },
  {
      nome: "Passeio ao ar livre",
      descricao: "Aproveite o ar livre para dar um passeio em um parque ou jardim, proporcionando estímulos visuais e sensoriais."
  }
];
