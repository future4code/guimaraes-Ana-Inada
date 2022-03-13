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
    currentPage: "signUp",
    inputUsuario: "",
    filtro:"",
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
  inserirUsuario = (event) =>{
    this.setState({inputUsuario:event.target.value});
}
  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };
  buscarDados=()=>{
    this.setState({filtro:this.state.inputUsuario})
}
  render(){
    const listaRenderizada = this.state.dadosSalvos
    .filter((dados)=>{
      if(dados.name === this.state.filtro){
        return dados 
      }else if (this.state.filtro === ""){
        return dados 
      }
      /**
       * compara o dados.name com o valor do filtro
       * OBS: se o valor vazio retornar todos
       */
    })
    .map((dados)=>{
      return(
        <div>
          <p key={dados.id}>{dados.name}</p>
          <button onClick={()=>this.apagarNome(dados.id)}>X</button>
        </div>
      )
    })
    
      return (
        <ContainerPai>
          { this.state.currentPage === "signUp" ?
          <InserirDadosClientes
            inputNome ={this.state.inputNome}
            inputEmail={this.state.inputEmail}
            createUser={this.createUser}
            inserirNome ={this.inserirNome}
            inserirEmail={this.inserirEmail}
          /> :
          <ProcurarDados
          listaRenderizada={listaRenderizada}
          inserirUsuario={this.inserirUsuario}
          dadosSalvos={this.state.dadosSalvos}
          inputUsuario={this.state.inputUsuario}
          buscarDados={this.buscarDados}

          />}
          <button onClick={this.changePage}>Trocar de tela</button>
        </ContainerPai>
      );
  }
}

export default App;
