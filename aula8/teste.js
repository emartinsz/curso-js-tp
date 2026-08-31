/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é de 25.9
*/

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84
const altura = 1.8;

let imc; // peso / (altura * altura)

let anoAtual = 2026;
let nascimentoAno; 
nascimentoAno = anoAtual - idade;
console.log(nascimentoAno)

imc = peso / (altura * altura);

console.log(nome + " " + sobrenome, "tem", idade, "anos, pesa", peso, "kg, e tem", altura, "de altura e seu IMC é de", imc, "e nasceu do ano de", nascimentoAno)