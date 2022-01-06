```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let somaDasNotas = (p1*2) + (p2*3) + ex 
  let mediaPonderada= somaDasNotas/ 6 
  
  if(mediaPonderada>=9){
    return "A" 
  } else if (9>mediaPonderada&&mediaPonderada>=7.5){
    return "B" 
  }else if (7.7>mediaPonderada&&mediaPonderada>=6){
    return "C" 
  }else {
    return "D" 
  }
}
```