/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
/*

*/
 console.log("Boas vindas ao jogo de Blackjack")
if(confirm("Quer iniciar uma nova rodada?")){
   console.log("Vamor iniciar a rodada"); 
   
   
      function tirarJogo(){
         const carta1 = comprarCarta()
         const carta2 = comprarCarta()
         const salvarcartas = [carta1,carta2]
         return salvarcartas
      } 
      const baralhosDoUsuario = tirarJogo()
       const baralhoDoUsuario1 = baralhosDoUsuario[0]
       const baralhoDoUsuario2 = baralhosDoUsuario[1]
       const somaDosBaralhosDoUsuario = baralhoDoUsuario1.valor+baralhoDoUsuario2.valor
       console.log ("Usuário -", baralhoDoUsuario1.texto , baralhoDoUsuario2.texto, "- pontuação ",somaDosBaralhosDoUsuario)
      
      const baralhosDoComputador = tirarJogo()
       const baralhosDoComputador1 = baralhosDoComputador[0]
       const baralhosDoComputador2 = baralhosDoComputador [1]
       const somaDosBaralhosDoComputador = baralhosDoComputador1.valor + baralhosDoComputador2.valor 
      console.log ("Computador -", baralhosDoComputador1.texto , baralhosDoComputador2.texto, "- pontuação ",somaDosBaralhosDoComputador)
            if (somaDosBaralhosDoComputador === somaDosBaralhosDoUsuario ){
               console.log ("Empate!")
            } else if (somaDosBaralhosDoComputador > somaDosBaralhosDoUsuario){
               console.log ("O computador ganhou!")
            } else{
               console.log ("O usuário ganhou!")
            }

}else {
   console.log ("O jogo acabou.")
}
