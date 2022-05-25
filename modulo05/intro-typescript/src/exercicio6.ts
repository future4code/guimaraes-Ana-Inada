function doisNumeros(num1:number, num2:number){
  let maiorNumero:number;
  let menorNumero:number;
  if (num1 > num2) {
   maiorNumero = num1;
   menorNumero = num2;
 } else {
   maiorNumero = num2;
   menorNumero = num1;
 }
   return console.log( `A soma é ${num1+num2}, a subtrção é ${num1-num2}, a multiplicação é ${num1*num2}, o maior número é ${maiorNumero}` )
}
doisNumeros(10,20)