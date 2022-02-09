import React from "react";
import styled from 'styled-components';
import Usuario from "./components/Usuario/Usuario";
import Mensagem from "./components/Mensagem/Mensagem";
import Botao from "./components/Botao/Botao";


const Conteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;  
  align-self: center;
  border: 1px solid gray;
  width: 500px;
  height: 90vh;
  margin:auto;
  background-color: #0000002e;
`
const Ofelia=styled.div`
  background-image: url("/img/ofelia.jpg");
  background-size: 25%;
  background-repeat: repeat;
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  right:0;
  z-index:-1;
`
const ContainerInteracao = styled.div`
  display: flex;
  flex-direction: row; 
  align-self: end;
  border: 1px solid gray;
  width: 500px;
  height: 40px;
`
const ContainerDeConversa= styled.div`
  flex-grow:1;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  padding: 20px;
  overflow-y:auto;
`
const CaixaDeMensagem=styled.p`
  margin:0px;
  padding: 14px;
  background-color: #d5e1db;
  border-radius: 4px;
  border: 1px solid #f3f3f3;
`
class App extends React.Component{
  /*. 
  */ 

  constructor(props){
    super(props);
    /* 
    criando variavel "privada" (acessivel somente pela linguagem) 
    _state com valor inicial do objeto
    {
      user:"",
      message: "",
      conversa: [],
    }
    */

    this.state={
        user:"",
        message:"",
        conversa:[]
    }
  }
  adcionarConversa=()=>{
    const novaConversa={
      user:this.state.user,
      message:this.state.message
    };
    console.log(novaConversa)
    const gravarConversa=[ novaConversa,...this.state.conversa];
    this.setState({conversa:gravarConversa})
    this.setState({message:""})
  };

  onChangeUsuario=(event) =>{

    /**
     * setState( { user: <valor> } )
     * atualiza o user dentro _state com valor
     * que estiver escrito após os dois pontos
     * ex: se o valor de event.target.value for 
     * "batata" apos a linha seguinte
     * _state = {
     *    user: "batata",
     *    message: "",
     *    conserva: [],
     * }
     */
    this.setState({user:event.target.value})
}
  onChangeMensagem=(event) =>{
  this.setState({message:event.target.value})
}
 
  render(){
    /**
     * this.state.conversa 
     * acessa o valor atual de _state.conversa
     */
    const listaDeConversa=this.state.conversa.map((dialogo) =>{
      return (
        <CaixaDeMensagem>
          <strong>{dialogo.user}</strong>: {dialogo.message}
        </CaixaDeMensagem>
      );
    });
    console.log(listaDeConversa)

    return(
      <Conteiner>
        <Ofelia/>
        <ContainerDeConversa>
          {listaDeConversa}
        </ContainerDeConversa>
      
        <ContainerInteracao>
          {/** 
           * props iniciada com "on" elas indicam que 
           * uma funcçâo deve ser passada para lidar 
           * com um evento. 
           * Toda vez que eventio (nesse caso o usuário digitar no campo de usuário)
           * o valor após a digitação vai ser passado para a função this.onChangeUsuario, 
           * junto com metadados do evento.
           * o campo com nome value em inglês ou valor em pt-br usualmente ele significa 
           * do campo
          */}
          <Usuario onChangeUsuario={this.onChangeUsuario} valorUsuario={this.state.user}/>
          <Mensagem onChangeMensagem={this.onChangeMensagem} valorMensagem={this.state.message}/>
          <Botao adicionarConversa={this.adcionarConversa}></Botao>
        </ContainerInteracao>
      </Conteiner>
    )
  }
}

export default App;
