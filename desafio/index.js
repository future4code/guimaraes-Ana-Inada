// desafio
// 1
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// a. 77°F em kelvin
let a = (77 -31)*(5/9)+ 273.15
console.log ("o resultado de de 77°F em K é", a)

//b. 80°C em °F
let b = 80*(9/5) + 32
console.log ("o resultado de 80°C para °F é", b)

//c. 30°C em °F e K
let c = 30 * (9/5) + 32
let d = c - 32 * (5/9) + 273.1
console.log (" 30°C em °F é", c, "e em K é", d)

//d. 
let ef = Number (prompt ("coloque o valor em graus celsius que deseja converter"))
let e = ef * (9/5) + 32
let f = e - 32 * (5/9) + 273.1
console.log (" 30°C em °F é", e, "e em K é", f)

// 2
//a. consumo 280 , 0.05 reais / hora
consumoMensal = 280 * 0.05
console.log ("O valor a ser pago é", consumoMensal)

// b. 15% de desconto
consumoMensalDesconto = consumoMensal - ((consumoMensal/100) * 15)  
console.log ("O valor a ser pago com desconto é", consumoMensalDesconto)

// 3. 
//a. 1 lb = 0,4536 kg 20lb equivalem a X kg
librasEmKg = 20 * 0.4536
console.log ("20 lb equivale a", librasEmKg,"kg")

//b. 1 oz = 0.0283 kg 10.5oz
ozEmKg = 10.5 * 0.0283
console.log ("10.5oz equivalem a", ozEmKg,"kg")

//c. 1 milha = 1609,34 metros 
miEmMetros = 100 * 1609.34
console.log ("100mi equivale a", miEmMetros,"m")

//d. 1 m = 3,2808399 
metrosPor = 50 * 3.2808399
console.log("50ft equivalem a", metrosPor,"m")

// e. 4,54609 Litros = 1gal
galao = 103.56 * 4.54609
console.log ("103.56gal equivalem a", galao ,"l")

// g. 
let conversor = Number (prompt("Coloque o peso em oz que quer converter em kg"))
convertido = conversor * 0.0283
console.log ("O valor de", conversor,"oz equivalem a", convertido,"kg")
