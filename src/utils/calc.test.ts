import { somar, filtrarAtivos, Usuario } from "./calc";

const usuariosMock: Usuario[] = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Bruno", ativo: false },
  { id: 3, nome: "Carlos", ativo: true },
  { id: 4, nome: "Pedro", ativo: true },
];

describe("Funções utilitárias", () => {
  test("deve somar dois números corretamente", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("deve retornar apenas usuários ativos", () => {
    const ativos = filtrarAtivos(usuariosMock);
    expect(ativos).toHaveLength(2);
    expect(ativos[0].nome).toBe("Ana");
  });

  test("deve retornar array vazio se nenhum usuário ativo", () => {
    const ativos = filtrarAtivos([{ id: 1, nome: "João", ativo: false }]);
    expect(ativos).toHaveLength(0);
  });
});
