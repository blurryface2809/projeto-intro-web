// Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta 
// coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. 
// Pode ser qualquer coisa que possa ser descrita com características escritas.

// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar 
// estas características para definir exemplos destes objetos usando o código.

// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;

//~~~~~~ONE DIRECTION~~~~~~~

const nome1D1 = `Louis Tomlinson`
const idade1D1 = 30
const carreiraSolo1 = true

// Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de 
// uma só vez. Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.


// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se 
// que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.


const nome1D2 = `Harry Styles`
const idade1D2 = 28
const carreiraSolo2 = true

const nome1D3 = `Zayn Malik`
const idade1D3 = 29
const carreiraSolo3 = true

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média 
// utilizando um console.log. Guarde este valor em uma const;

// 💡A média deve ser igual à soma dos itens, dividida pelo total de itens.

console.log (`A média das idades desses três integrantes da banda é ${(idade1D1 + idade1D2 + idade1D3) / 3} anos`)

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array.
// Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber 
// strings.

const albunsSolo1D1 = [`Walls`]
const albunsSolo1D2 = [`Self Titled `,` Fine Line `, ` Harry's House`]
const albunsSolo1D3 = [`Mind of Mine `, ` Icarus Fall ` , ` Nobody is Listening`]

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

console.log (`${nome1D1.toUpperCase()}
Idade: ${idade1D1}
Está fazendo carreira solo? ${carreiraSolo1}
Quais álbuns já lançou sozinho? ${albunsSolo1D1}`)

console.log (`${nome1D2.toUpperCase()}
Idade: ${idade1D2}
Está fazendo carreira solo? ${carreiraSolo2}
Quais álbuns já lançou sozinho? ${albunsSolo1D2}`)

console.log (`${nome1D3.toUpperCase()}
Idade: ${idade1D3}
Está fazendo carreira solo? ${carreiraSolo3}
Quais álbuns já lançou sozinho? ${albunsSolo1D3}`)