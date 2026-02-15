
// BASICO

// EXERCICIO 1

// const idade =Number(prompt("Digite sua idade"));




// if (idade <= 11) {
//     alert("Você é uma criança")
// }
// else if (idade <=17){
//     alert ("Você é adolescente")
// }
//  else if (idade <=18){
//  alert("Você é maior de idade");


//  }
//  else if (idade <=50){
//     alert ("Você é adulto")
//  }
// else if(idade <=60) {
//     alert ("Você é idoso")
// }
//  else{
//     alert ("Você ta pra morrer")
//  }




// EXERCICIO 2

// const Numero =Number(prompt("Insira um número"))
// if (Numero >= 1) {
//     alert("O número é positivo")


// }
//     else if (Numero <=0){
//         alert ("O numero é negativo")
//     }



// EXERCICIO 3
// const Nota =Number(prompt("Insira a nota"))
// if (Nota >=60){
//     alert ("Aluno aprovado!")
// }
// else {
//  alert ("Aluno reprovado!")
// }



// EXERCICIO 4

// const Numero = Number(prompt("Insira uma número"))
// if (Numero <= -1) {
//     alert("O número é negativo")



// } else if (Numero ==0){
//     alert("Você digitou 0")
// }
//     else if (Numero >= 1) {
//     alert("O numero é positivo")
// }



// EXERCICIO 5

// const idade =Number(prompt("Digite sua idade"));




// if (idade <= 11) {
//     alert("Você é uma criança")
// }
// else if (idade <=17){
//     alert ("Você é adolescente")
// }
//  else if (idade <=18){
//  alert("Você é maior de idade");


//  }
//  else if (idade <=50){
//     alert ("Você é adulto")
//  }
// else if(idade <=60) {
//     alert ("Você é idoso")
// }
//  else{
//     alert ("Você ta pra morrer")
//  }



// EXERCICIO 6


// const Numero =Number(prompt("Digite um número"))

// if (Numero %2 ==0) {
//  alert ("O número é par")
// }
// else { 
//  alert   ("O número é impar")
// }


// iNTERMEDiARIO
// EXERCICIO 1
// const Numero1 =Number(prompt("Digite o primeiro número"));
// const Numero2 =Number(prompt("Digite o segundo número"));
// const operacao =prompt("Digite a operação (+,-,*,/");
// let resultado;
// if (operacao == "+" ) {
//     resultado = Numero1 + Numero2
//     alert (`O resultado da soma entre ${Numero1} e ${Numero2} é igual a ${resultado}`)
// }
// else if (operacao == "-" ) {
//     resultado = Numero1 - Numero2
//     alert (`O resultado da subtração entre ${Numero1} e ${Numero2} é igual a ${resultado}`)
// }
// else if (operacao == "*" ) {
//     resultado = Numero1 * Numero2
//     alert (`O resultado da multiplicação entre ${Numero1} e ${Numero2} é igual a ${resultado}`)
// }
// else if (operacao == "/" ) {
//     resultado = Numero1 / Numero2
//     alert (`O resultado da divisão entre ${Numero1} e ${Numero2} é igual a ${resultado}`)

// }


// EXERCICIO 2
// const Numero1 = Number(prompt("Digite o primeiro número"))
// const Numero2 = Number(prompt("Digite o segundo número"))
// const Numero3 = Number(prompt("Digite o terceiro número"))
// if (Numero1 > Numero2 && Numero1 > Numero3)
//     alert(`O Numero ${Numero1} é maior que o numero ${Numero2} e o ${Numero3}`)
// if (Numero2 > Numero3 && Numero1 > Numero1)
//     alert(`O Numero ${Numero2} é maior que o numero ${Numero3} e o ${Numero1}`)
// else {
//     alert (`O numero ${Numero3} é maior que o numero ${Numero2} e o ${Numero1}`)
// }


// EXERCICIO 3
// const Numero1 = Number(prompt("Digite o valor da compra"))
// const Numero2 = Number(prompt("DIgite o valor da compra"))
// const Numero3 = Number(prompt("DIgite o valor da compra"))
// let Total = Numero1 + Numero2 + Numero3
// let Totaldesc
// if (Total >= 100) {

//     Totaldesc = (Total - 0.10 * Total)
//     alert(`O valor total da compra foi ${Totaldesc}`)


// }
//  else {
//         alert (`Você não recebeu desconto. O valor foi de ${Total}`)
// }



// EXERCICIO 4
// const Nome = prompt("Digite o seu nome").toLowerCase()
// const Senha = Number(prompt("Digite sua senha"))
// if (Nome == "admin" && Senha == 1234)  {

//     alert(`Login bem sucedido`)

// }
//      else {
//         alert (`Acesso negado`)
//      }



// AVANÇADO

// EXERCICIO 1
// const Lado1 =Number(prompt("DIgite o primeiro lado"))
// const Lado2 =Number(prompt("DIgite o segundo lado"))
// const Lado3 =Number(prompt("DIgite o terceiro lado"))
// if (Lado1 ==Lado2 && Lado1 ==Lado3){
//     alert (`O triangulo é equilatero`)
// }
// else if (Lado2 ==Lado3 || Lado1 ==Lado3){
//     alert (`O triangulo é isósceles`)
// }
// else {
//     alert (`O triangulo é escaleno`)
// }


// EXERCICIO 2
// const Nota =Number(prompt("Digite a sua nota"))
// if (Nota >=90){
//     alert (`Sua nota é A. Parabéns!!`)
// }
// else if (Nota >=80){
// alert (`Sua nota é B.`)  }
// else if (Nota >=70){
//     alert (`Sua nota é C.`)
// }
// else if (Nota>=60){
//     alert ("Sua nota é D.")
// }
// else if (Nota <60){
//     alert ("Sua nota é F. Você precisa melhorar.")
// }



// EXERCICIO 3
// const Peso = Number(prompt("Digite seu peso"))
// const Altura = Number(prompt("Digite sua altura"))
// let imc = Peso / (Altura * Altura)
// if (imc < 18.5) {
//     alert(`Baixo Peso`)
// }
// else if (imc >= 18.5 && imc <24.99) {
//     alert(`Normal peso`)
// }
// else if (imc >= 25 && imc <29.99) {
//     alert(`Sobrepeso`)
// }

// else{
//     alert(`Obesidade`)
// }



// EXERCICIO 4
const Ano =Number(prompt("Digite o ano"))
if ((Ano %4 ===0 && Ano %100)|| (Ano %400 ==0)){
 alert (`O ano é bissexto`)
}
else {
    alert (`O ano não é bissexto`)
}