// function somar (a: number, b: number): number {
//     return a + b;
// }    

// const resultado = somar(10, 5);
// console.log(resultado);

// function mostrarNome(nome: string): void {
//     console.log(`Olá, ${nome}!`);
// }

// mostrarNome("Vandeson");

// function pegarIdade(): number {
//     return 25;
// }

// const idade = pegarIdade();
// console.log(idade);

// function mostrarMensagem(): void {
//     console.log("Olá! Seja bem-vindo!");
// }

// mostrarMensagem();

type Pessoa = {nome:string; idade:number};

function criarPessoa(n:string, idade:number): Pessoa {
    return{nome:n ,  idade: idade};
}

const p = criarPessoa("Vandeson", 36);
console.log(p)

const p1 = criarPessoa("Taty", 26);
console.log(p1)
