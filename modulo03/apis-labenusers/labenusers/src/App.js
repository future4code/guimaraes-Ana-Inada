import React from 'react';
import styled from 'styled-components';
import InserirDadosClientes from './componentes/InserirDadosCliente/InserirDadosClientes'
import axios from 'axios'
const ContainerPai= styled.div`
  margin: auto;
  margin-top: 300px;
  width: auto;
`
const criarNovousuario = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers:{
    Authorization: "ana-inada-guimaraes"
  }
}

class App extends React.Component{
  state= { 
    novosDados:[],
    inputNome:"",
    inputEmail:"",
  }
   createUser =()=>{
    const body = {
      dadosInseridos: this.state.novosDados
    }
    axios
    .post(criarNovousuario,body,headers)
    .than ((response)=>{
      alert ("Seus dados foram adicionados");
      this.setState({})
    })
    .catch ((err)=>{
      alert("Houve algum erro, confira se seus dados estão certo")
    }) 
  };
  render(){
      return (
        <ContainerPai>
          <InserirDadosClientes/>
        </ContainerPai>
      );
  }
}

export default App;
