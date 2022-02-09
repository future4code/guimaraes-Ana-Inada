import React from 'react';
import Etapa1 from './componentes/Etapa_1/Etapa1';
import Etapa2 from './componentes/etapa_2';
// import Etapa3 from './componentes/etapa_3';
// import Etapa4 from './componentes/etapa_4';
// import Final from './componentes/final';

export default class App extends React.Component{
  state={
    proximaEtapa: false
  }

  irParaProxima = () =>{
    this.setState({proximaEtapa:true})
  }

  render(){
    let pagina =this.state.proximaEtapa ?(
      <Etapa2 onClickEtapa2={this.irParaProxima} />
    ) : ()
      
    return( 
    <Etapa1/>
    )
  }
}


