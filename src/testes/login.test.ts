import {test, describe, expect} from 'vitest'

function login(username: string, password: string): boolean {
    return username === 'pipino' && password === '12345';
}

test('Permitir fazer login com credenciais válidas', () => {
    const efetuandoLogin = login('pipino', '12345')
    expect(efetuandoLogin).toBe(true)

});

describe('Negar o login com credenciais inválidas', () => {

    test('Negar login com senha incorreta', () => {
        const efetuandoLogin = login('pipino', '123456')
        expect(efetuandoLogin).toBe(false)  
    });

    test('Negar login com usuário incorreto', () => {
        const efetuandoLogin = login('paulo', '12345')
        expect(efetuandoLogin).toBe(false)  
    });

    test('Negar login com usuário e senha incorreta', () => {
        const efetuandoLogin = login('pedro', '3456')
        expect(efetuandoLogin).toBe(false)  
    });

    test('Negar login com campos vazios', () => {
        const efetuandoLogin = login('', '')
        expect(efetuandoLogin).toBe(false)  
    });

})
