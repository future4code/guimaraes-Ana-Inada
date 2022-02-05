import React from "react";
import styled from 'styled-components';
import Usuario from "./components/Usuario/Usuario";
import Mensagem from "./components/Mensagem/Mensagem";
import Botao from "./components/Botao/Botao";


const Conteiner = styled.div`
  background-color: rgb(207, 228, 206);
  display: flex;
  flex-direction: row; 
  align-self: center;
  border: 1px solid gray;
  width: 500px;
  height: 90vh;
  margin:0px;
`
const ContainerInteracao = styled.div`
  display: flex;
  flex-direction: row; 
  align-self: end;
  border: 1px solid gray;
  width: 500px;
  height: 40px;
`
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        user:"",
        message:"",
        conversa:[]
    }
  }
  
  onChangeUsuario=(event) =>{
    this.setState({user:event.target.value})
}
  render(){
    return(
      <Conteiner>
        <ContainerInteracao>
        <Usuario onChangeUsuario={this.onChangeUsuario} valorUsuario={this.state.user}>

        </Usuario>
        <Mensagem></Mensagem>
        <Botao></Botao>
        </ContainerInteracao>
      </Conteiner>
    )
  }
}

export default App;
