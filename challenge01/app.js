// DESAFIO 01:

// 01 - Variável nome:
// Cria uma variável chamada userName onde se armazena uma string.
let userName = "Jim Milton";

// 02 - Variáveis idade e altura:
// Cria duas variáveis chamadas userAge e userHeigth onde se armazenam dois valores do tipo number.
let userAge = 25;
let userHeight = 1.75;

// Exibe uma mensagem no console do navegador/IDE através do console.log(),
// ultilizando o template string e os dados salvos nas variáveis descritas anteriormente.
console.log(`Olá ${userName}, você tem ${userAge} anos e sua altura é ${userHeight}m.`);

// 03 - Preço com desconto:
// Variáveis price e discount que armazenam dados, assim como as anteriores.
let price = 50;
let discount = 0.2;

// DiscountAmount recebe o valor da multiplicação entre o preço e a porcetagem do desconto,
// resultando no valor total o desconto.
let discountAmount = price * discount;

// DiscountedPrice recebe o valor do preço final com desconto aplicado.
let discountedPrice = price - discountAmount;

// Exibe no console o preço final com desconto aplicado.
console.log(`O valor com desconto é R$ ${discountedPrice}.`);

// 04 - Conferir temperatura:
// Mais uma variável que recebe um valor do tipo number.
let temperature = 30;

// Lógica do if else. Onde será exibido no console "Está calor!", caso a temperaturo for maior que 25 e
// "Está fresco!" caso não.
if (temperature > 25) {
    console.log("Está calor!");
} else {
    console.log("Está fresco!");
}

// 05 - Maior/menor de idade:
// Aqui estamos usando o Math.random() para gera um número aleatório entre 0 e 1 e multilplicando 
// por 122 (idade registrada da pessoa mais velha que já viveu) + 1, asssim alterarando esse 
// intervalo para 1 a 122.99;
// O parseInt() serve para converter o resultado final para números inteiros, exluindo a parte decimal (1,2,3,...122).
let randomAge = parseInt(Math.random() * 122 + 1);

// Lógica do if else. Onde será exibido no console a idade da pessoa juntamente com a informação de que ela é maior de 
// ou não, a depender se o valor informado (randomAge) é maior ou igual a 18.
if (randomAge >= 18) {
    console.log(`Você possui ${randomAge} Anos de idade, então é maior de idade.`);
} else {
    console.log(`Você possui ${randomAge} Anos de idade, então é menor de idade.`);
}

// 06 - Aprovado/reprovado:
// Mesma lógica da variável randomAge.
let grade = parseInt(Math.random() * 11);

// Mesma lógica de if elses anteriores.
if (grade >= 7) {
    console.log(`Parabéns, sua nota foi ${grade}. Você foi aprovado.`);
} else if (grade > 4 && grade < 7) {
    console.log(`Olá, sua nota foi ${grade}. Você ficou em recuperação.`);
} else {
    console.log(`Olá, sua nota foi ${grade}. Infelizmente você foi reprovado.`);
}

// 07 - Números iguais/diferentes:
// Math.random() sendo ultilizado novamente, juntamente com o parseInt().
let number01 = parseInt(Math.random() * 11);
let number02 = parseInt(Math.random() * 11);

// if else ultilizando comparador de igualdade. Verifica se dois valores são iguais e segue o mesmo padrão
// de if elses já explicados anteriormente.
if (number01 === number02) {
    `Os números ${number01} e ${number02} são iguais.`;
} else {
    `Os números ${number01} e ${number02} são diferentes.`;
}

//  08 - Variáveis nome e idade:
// Mais variáveis recebendo valores.
let userName02 = "Micah Bell";
let userAge02 = 39;

// Console.log() recebendo valores para exibir no console.
console.log(`Olá, seu nome é ${userName02} e você tem ${userAge02} anos.`);

// 09 - Loop que imprime de 1 a 10:
// Variável number recebendo número 1 para início de uma iteração de loop.
let number = 1;

// O while realiza um loop no código, ou seja realiza uma ação determinado número de vezes até que uma condição seja atendida;
// Nesse caso ele recebe a variável number com o valor 1 e determina que esse loop será realizado enquanto
// o valor existente nessa variável for menor ou igual a 10;
// Para que isso funcione corretamente ele incrementa um valor a mais na variável number através do number++, a cada volta do loop;
// Por fim exibe no console o valor final dessa iteração contendo os valroes de 1 a 10.
while (number <= 10) {
    console.log(number);
    number++;
}

// 10 - acertar número 5:
// Variáveis condendo informações importantes para um loop while, onde:
// secretNumber: Recebe o número a ser descoberto pelo usuário, nesse caso 5;
// userAttempts Recebe o número de tentativas ultilizadas pelo usuário para descobrir 
// esse número secreto, inicialmetne recbe o valor 1; e
// userNumber: irá receber o número informado pelo usuário através do prompt.
let secretNumber = 5;
let userAttempts = 1;
let userNumber;

// Aqui o while verifica se número informado pelo usuário é diferente do número secreto. Caso seja, ele realiza as seguintes ações:
// - Através do prompt, pede ao usuário que informe um número de 1 a 10 e o armazena na variável userNumber, 
//   aqui já garantimos que o valor informado será um número com o uso do método Number();
// - Ultilizando o if verifica se o valor informado é igual ao número secreto, 
//   se for ele encerra o loop por aqui mesmo através do break e segue o código normalmente;
// - Aqui temos o acrescimo do 'else if' que é ultilizado para criar mais condiçoes de validação dentro da estrutura 'if else',
//   no nosso caso eles primeiro verificam se o número secreto é menor que o número informado pelo usuário, depois em uma nova
//   validação, verificam se o número secreto é maior que o número informado pelo usuário e retornam uma mensagem informando;
// - Por fim, o else retorna uma mensagem pedindo ao usuário que insira um 
//   número válido, caso o usuário informe algum dado incorreto ou não insira nada;
// - todas as mensagens são transmitidas ao usuário através do alert().
while (userNumber != secretNumber) {
    userNumber = Number(prompt(`Escolha um número entre 1 e 10.`));

    if (secretNumber === userNumber) {
        break;
    } else if (secretNumber < userNumber && userNumber <= 10) {
        alert(`O número secreto é menor que o ${userNumber}. Tente novamente!`);
    } else if (secretNumber > userNumber && userNumber >= 1) {
        alert(`O número secreto é maior que o ${userNumber}. Tente novamente!`);
    } else {
        alert("Por favor insira um número válido.");
    }

    userAttempts++;
}

// Aqui temos uma pequena validação ultilizando operador ternário, apenas para ultlizar a palavra "tentativas" no plural
// quando as tentativas do usuário forem superiores a 1.
let wordAttempt = userAttempts > 1 ? "tentativas" : "tentativa";

// E para finalizar o código, temos um alert informando o usuário assim que ele acertar o valor do número secreto.
alert(`Parabéns! você descobriu o número secreto ${secretNumber} com ${userAttempts} ${wordAttempt}.`);

// 11 - Tabuada de 7:
// Variável multiplierNumber recebendo número 1 para início de uma iteração de loop.
let multiplierNumber = 1;

// Lõgica do while, semelhante aos já explicados anteriormente.
while (multiplierNumber <= 10) {
    console.log(7 * multiplierNumber);
    multiplierNumber++;
}

// 12 - Números pares até 20:
// Mais uma variável para iteração de loop.
let number03 = 0;

// Para verificar se um número é par, estamos usando o % (resto da divisão), aqui  ele divide o número que vem da variável number03
// por 2 e nos retorna o resto dessa divisão, caso for zero significa que o número é par.
while (number03 <= 20) {
    if (number03 % 2 === 0) {
        console.log(number03);
    }
    number03++;
}

// 13 -  Calcular área de um circulo:
// Para calcular a área de um circulo estamos usando uma função no formato arrow function, as funções são blocos de códigos
// que realizam uma tarefa específica. No nosso caso, ela realiza a seguinte tarefa:
// - Recebe um valor de entrada através do radius;
// - Faz uma pequena validação desse valor, primeiro verificando se esse valor não é um número através do isNaN(), 
//   logo em seguida verifica se esse valor é menor que zero. Se confirmando uma dessas possibilidades retorna uma mensagem de erro;
// - Depois armazena nas vareáveis pi e area, o valor de π e o valor da área do circulo em questão, respectivamente;
// - Por fim, caso tudo ocorra como esperado retorna uma mensagem informando ao usuário o valor aproximado da área do circulo;
// - Ao informar os valores das variáveis no template string de retorno, estamos ultilizando o toFixed(2),
//   ele serve para formatar um número com duas 2 casas decimais, ou seja apenas dois número depois da virgula.
const areaOfTtheCircle = (radius) => {
    if (isNaN(radius) || radius < 0) {
        return "Erro! o valor de radius deve ser um número positivo.";
    }
    
    let pi = Math.PI;
    let area = pi * (radius * radius);

    return `A área do circulo com raio de ${radius.toFixed(2)}m é aproximadamente ${area.toFixed(2)}m².`;

};

// Aqui estamos realizando um teste na função areaOfTtheCircle(), mais uma vez ultilizando o Math.random() para pegar um
// número aleatório, dessa vez entre 0 e 1000 e chamando a função dentro do console.log() para retornar seu valor no console.
let radiusOfTheCircle = Math.random() * 1001;
console.log(areaOfTtheCircle(radiusOfTheCircle));

// 14 - Soma de dois números:
// Uma função simples que recebe dois valores de entrada e faz uma soma desses dois valores;
// Processo de validação e retorno semelhantes à função anterior.
const sumFunction = (number01, number02) => {
    if (isNaN(number01) || isNaN(number02)) {
        return "Erro! Por favor insira todos os dados corretamente. Os valores se entrada devem ser numéricos.";
    }

    let sum = number01 + number02;
    return `O resultado da soma de ${number01} + ${number02} é ${sum}.`;
    
};

// Teste da função umFunction().
console.log(sumFunction(1, 1));

// 15 - Refatorar código:
// Devemos declarar nomes de funções, variáveis e etc, com clareza e objetividade, evitando nomes genéricos 
// e dizendo exatamente o que cada uma faz ou recebe. Além de seguir as boas práticas da linguagem, no caso do javascript 
// por exemplo devemos utilizar o padrão camelCase, onde a primeira letra da primeira palavra é minúscula e a primeira letra 
// de cada palavra subsequente é maiúscula, como nos exemplos abaixo.
let numberTen = 10;
let numberTwenty = 20;

// Chamada da função sumFunction() para soma dos valores informados.
console.log(sumFunction(numberTen, numberTwenty));

// Testes e resultados podem ser vistos no console do navegador rodando o arquivo index.html através da extensão Live Server :)
