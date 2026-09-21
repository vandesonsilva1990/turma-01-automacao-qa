Atividade: Automação QA - Gerenciamento de Casos de Teste

Este repositório contém a resolução da atividade de tipagem e funções em TypeScript para o projeto automacao-qa.

📌 O que foi feito

Modelagem de Dados:

Criação do type CasoDeTeste com as propriedades:

id: number

titulo: string

descricao: string

automatizado: boolean

Desenvolvimento de Funções:

criarCasoDeTeste: Recebe os parâmetros necessários e retorna uma nova instância do tipo CasoDeTeste.

descrever: Retorna uma string formatada no padrão Id: {id} - Título: {titulo} ....

marcarAutomatizado: Recebe um CasoDeTeste, altera o atributo automatizado para true e retorna a versão atualizada do objeto.

Invocação e Uso:

Declaração da constante primeiroCasoDeTeste chamando a função de criação.

Chamada da função marcarAutomatizado atualizando a constante original.

Simulação de Erro de Tipo:

Provocação intencional de erro estático do TypeScript ao enviar um texto no argumento onde se esperava um valor do tipo number.

Configuração de Versionamento:

Criação do arquivo .gitignore na raiz da pasta automacao-qa ignorando a pasta node_modules/.

🚀 Como Rodar o Projeto

Pré-requisitos

Node.js instalado na sua máquina (v16+)

TypeScript e ts-node instalados globalmente ou no projeto.

Passos para Execução:

Instale as dependências (caso necessário):

npm install


Execute o arquivo diretamente via TypeScript:

npx ts-node src/atividades/casos-de-teste.ts


Ou verifique os erros de compilação:

npx tsc --noEmit


❌ Erro de Tipo Provocado

Onde e como ocorreu:

No arquivo src/atividades/casos-de-teste.ts, realizamos a seguinte chamada passando a string "1" no lugar do parâmetro id (que aceita apenas number):

const casoComErro = criarCasoDeTeste("1", "Caso com Erro de Tipo", "Teste provocando erro no compilador", false);


Print / Mensagem de Erro exibida pelo Editor/Compilador:

src/atividades/casos-de-teste.ts:46:38 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

46 const casoComErro = criarCasoDeTeste("1", "Caso com Erro de Tipo", "Teste provocando erro no compilador", false);
                                        ~~~


Representação em tela (VS Code / IDE):

🔴 TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
