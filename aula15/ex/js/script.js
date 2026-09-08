let numero = prompt("Digite um número: ");
numero= Number(numero);
const numeroTitulo = window.document.getElementById("numero-titulo"); 
const texto = window.document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número - 2 é ${numero +2}. </p>`;