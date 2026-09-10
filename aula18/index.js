/* const pessoa = {
    nome: 'Emily',
    sobrenome: 'Martins',
    idade: 25
};

console.log(pessoa.idade); */

/*function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ("Emily", "Martins", 25);
console.log(pessoa1.idade) */

const pessoa1 = {
    nome: "Emily",
    sobrenome: "Martins",
    idade: "20",

    fala() {
        console.log(`A minha idade atual é ${this.idade}`); // this seria esse 
    },

    incrementaIdade () {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade(); // incremento de idade
pessoa1.fala(); 

