// Você deverá fazer tudo usando somente JavaScript:

// Acesse o elemento elementoOndeVoceEsta.
// console.log(document.getElementById('elementoOndeVoceEsta'));
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// console.log(document.getElementById('elementoOndeVoceEsta').parentNode);
const pai = document.querySelector('#elementoOndeVoceEsta').parentNode;
pai.style.backgroundColor = 'yellow';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. 
document.querySelector('#primeiroFilhoDoFilho').innerText = 'neto1';
// Acesse o primeiroFilho a partir de pai.
// console.log(document.querySelector('#pai').firstChild);
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// console.log(document.querySelector('#elementoOndeVoceEsta').previousSibling);
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
// Agora acesse o terceiroFilho a partir de pai.
// console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);