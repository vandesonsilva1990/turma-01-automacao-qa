import { expect, test } from "vitest";

interface User {
    nome: string;
    idade: number
}

function createUser(nome:string, idade:number): User {
    return {nome, idade}
}

test('Criar um usuário com nome e idade',() => {
    const user = createUser('Vandinho', 36)

    expect(user).toEqual({nome: 'Vandinho', idade: 36})
    expect(user.nome).toBe('Vandinho')
});