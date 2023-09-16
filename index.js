//Aula de laços e loops.
//While("enquanto") é a estrutura mais basica de criação de loops
//let condicao = true
//while(condicao) {
    //enquanto a condição for verdadeira
    //as linhas de codigo dentro deste bloco
    //serao executadas

    //assim que a condicao ficar falsa
    //o LOOP/laço vai parar
//}

//exemplo 1
let i = 0;
while (i < 10) {

    console.log(i);

    i++;
}

//exemplo 2
let estomago = 0;
while (estomago < 100) {
    console.log("quero comer mais coxinhas");
    estomago = estomago + 10;
}

//exercicio 1
let soma = 0;
let numero = Number(prompt("Digite um numero"))
while (numero !== 0) {
    soma = soma + numero;
    numero = Number(prompt("Digite um numero"));
}
console.log("A soma dos numeros inseridos é:" + soma);

//for
const numeros = [14, 67, 89, 15, 23]
for (let i = 0; i < 5; i++) {
    const elemento = numeros[i]
    console.log(elemento)
} 

//exercicio 2
function encontrarMaiorNumero(array) {
    let maior = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return "o maior numero é:" + maior;
}
const numeros1 = [3, 9, 1, 27, 6];
console.log(encontrarMaiorNumero(numeros1));

//for of
const numeros2 = [14, 67, 89, 15, 23];
for (let numero of numeros2) {
    console.log(numero);
}

let meuArray = [1,2,3,4,5,6,7,8,9,10];
for (const elemento of meuArray) {
    console.log(elemento)
}

//for each
meuArray.forEach(elemento => {
    console.log(elemento)
});

//exercicio 3
function criarMensagem(palavras) {
    let mensagem = palavras.join(' ');
    return mensagem;
}
let palavras = ["Ola", "amigo", "como", "voce", "esta?"];
let mensagem = criarMensagem(palavras);
console.log(mensagem);
