const prompt = require('prompt-sync')();
let n = Number(prompt("Entrez un nombre: "));
for(let i = 1; i <= 10; i++){
    let res =n*i;
    console.log(res)
}