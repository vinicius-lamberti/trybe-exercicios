//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let cont = 0;
let word = '';

for (i = 0; i < array.length; i += 1) {
  if(array[i].length > cont) {
    cont = array[i].length;
    word = array[i];
  }
}

console.log(cont);
console.log(word);