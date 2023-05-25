//Crie uma função que recebe dois números como parâmetros e retorna o maior deles;

const max = (x, y) => x > y ? console.log(x): console.log(y)
//console.log(max(55,36))

//Escreva uma função chamada é paisagem que recebe a largura e a altura de uma imagem,
//retorne true se a imagem estiver no mod paisagem;

const ePaisagem = (alt, lar) =>  lar > alt 

console.log(ePaisagem(600,1200))

//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número não é divisível por 3 ou 5 = retorna o próprio número
//Checar se o número é remalnte um número
//Use a função com números de 0 a 20


const FizzBuzz = (number) => {
    if (typeof number === "number"){
        if (number % 5 === 0 && number % 3 === 0) {
            return 'FizzBuzz'
        } else if (number % 5 === 0) {
            return 'Buzz'
        } else if (number % 3 === 0) {
            return 'fizz'
        } else {
            return number
        }
    } return "O parâmetro recebido não é um número"
}

for (let i = 0; i < 100; i++){
 console.log(i, FizzBuzz(i))
}