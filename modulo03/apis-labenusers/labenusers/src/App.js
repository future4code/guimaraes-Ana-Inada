import React from 'react';
import styled from 'styled-components';
import InserirDadosClientes from './componentes/InserirDadosCliente/InserirDadosClientes'
import ProcurarDados from './componentes/ProcurarDados/ProcurarDados'
import axios from 'axios'
const ContainerPai= styled.div`
  margin: auto;
  margin-top: 300px;
  width: auto;
`
const urlUsuario = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers:{
    Authorization: "ana-inada-guimaraes"
  }
}

class App extends React.Component{
  state= { 
    dadosSalvos:[
    ],
    inputNome:"",
    inputEmail:"",
    currentPage: "signUp"
  }
  componentDidMount(){
    this.pegarDados()
  }
    pegarDados=()=>{
      axios
      .get(urlUsuario,headers)
      .then((res)=>{
        this.setState({dadosSalvos:res.data})
        console.log(res)
      })
      .catch((err) => console.log(err))
    }
    
   createUser =()=>{
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios
      .post(urlUsuario,body,headers)
      .then ((response)=>{
      alert ("Seus dados foram adicionados");
      this.pegarDados()
    })
    .catch ((err)=>{
      alert("Houve algum erro, confira se seus dados estão certo")
      ((err) => console.log(err.response))
    }) 
  };

  apagarNome=(idUser)=>{
    console.log(idUser)
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`,headers)
    .then((res)=>{
      this.pegarDados()
      console.log(res)
    })
    .catch((err)=>console.log(err.response))
  }


  inserirNome = (event) =>{
    this.setState({inputNome:event.target.value});
}
  inserirEmail=(event) =>{
    this.setState({inputEmail:event.target.value})
  }

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render(){
    const listaRenderizada = this.state.dadosSalvos.map((dados)=>{
      return(
        <div>
          <p key={dados.id}>{dados.name}</p>
          <button onClick={()=>this.apagarNome(dados.id)}>X</button>
        </div>
      )
    })
      return (
        <ContainerPai>
          <InserirDadosClientes
            inputNome ={this.state.inputNome}
            inputEmail={this.state.inputEmail}
            createUser={this.createUser}
            inserirNome ={this.inserirNome}
            inserirEmail={this.inserirEmail}
          />
          <ProcurarDados
          listaRenderizada={listaRenderizada}
          />
          <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.currentPage === "signUp" ? <InserirDadosClientes /> : <ProcurarDados/>}
        </ContainerPai>
      );
  }
}

export default App;
