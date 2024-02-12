// VARIAVEIS
let name = "TURBO MAN"
let nivelDoHeroi = 9000
​
​// ESTRUTURA DE DECISÃO
​
let nivel;
​
if(nivelDoHeroi < 1000){
    nivel= "FERRO";   
​
}  else if(nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000) {
    nivel = "BRONZE";
​
} else if (nivelDoHeroi>= 2001 && nivelDoHeroi <= 5000){
    nivel = "PRATA";
​
} else if (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000) {
    nivel = "OURO";
​
} else if (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000) {
    nivel = "PLATINA";
​
} else if (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000) {
    nivel = "ASCEDENTE";
​
} else if (nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000){
    nivel = "IMORTAL";
​
} else {
    nivelDoHeroi = "RADIANTE";
}
 
//SAÍDA
​
console.log(`O Herói de nome ${name} está no nível de ${nivel}!`)
​

 
 
 

