//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maior = 0;

for (let i = 2; i <= 50; i += 1) {
  cont = 0;
  for (let j = 2; j <= i; j += 1) {
    if(i%j == 0){
      cont ++;
    }
  }
  if (cont < 2) {
    maior = i;
  }
}

console.log(maior);