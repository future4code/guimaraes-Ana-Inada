import React from 'react';
import Etapa1 from './componentes/Etapa_1/Etapa1';
import Etapa2 from './componentes/etapa_2/Etapa2';
import Etapa3 from './componentes/etapa_3/Etapa3';
import Final from './componentes/final/Final';
import Botao from './componentes/botao/Botao';
import ContainerPai from './componentes/container_app/Container';

export default class App extends React.Component{
  state={
    // // constructor (props) {
    // //   super (props);
    //   state = {
        etapa: 1
  };
  
  

  renderizaEtapa=()=>{
    switch (this.state.etapa){
      case 1:
        return<Etapa1/>;
      case 2:
        return <Etapa2/>; 
      case 3:
        return <Etapa3/>;
      case 4: 
        return <Final/>;
      default:
        return <Final/>;
    }
  };
  proximaEtapa = () => {
    this.setState({etapa:this.state.etapa +1});
  };

  render(){
      
    return( 
      <ContainerPai>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 && (
          <Botao onClick={this.proximaEtapa}>Próxima etapa</Botao>
        )}
      </ContainerPai>
    )
  }
}


