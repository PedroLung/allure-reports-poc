export function somar(a: number, b: number): number {
  return a + b;
}

export interface Usuario {
  id: number;
  nome: string;
  ativo: boolean;
}

export function filtrarAtivos(usuarios: Usuario[]): Usuario[] {
  return usuarios.filter((u) => u.ativo);
}
