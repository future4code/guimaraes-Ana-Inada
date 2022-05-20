//2 
const numb1= Number(process.argv[2])
const numb2=Number(process.argv[3])
const operacao=process.argv[4]

switch(operacao.toLowerCase()){
    case "soma":
       console.log(`o resultado da soma é ${numb1 + numb2}`);
       break;
    case "subt":
        console.log(`o reultado da subtração é ${numb1 - numb2}`)
        break;
    case "multi":
        console.log(`o reultado da multiplicação é ${numb1 * numb2}`)
        break;
    case "div":
        console.log(`o reultado da divisão é ${numb1 / numb2}`)
        break;
    default: 
    console.log("deu ruim!")
}