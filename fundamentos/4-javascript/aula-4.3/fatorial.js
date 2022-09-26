//Crie um algoritmo que imprima na tela o fatoria de 10 (10!)

let fatorial = 1;
let numero = 10;

for (let i = 1; i <= numero; i += 1) {
  fatorial *= i;
}

console.log('O fatorial de', numero, 'é igual a', fatorial + '.');