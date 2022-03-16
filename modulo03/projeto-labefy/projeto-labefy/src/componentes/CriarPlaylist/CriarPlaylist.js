import styled from 'styled-components';
import React from 'react';
import axios from 'axios';


const urlPlaylist = 
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers:{
        Authorization: "ana-inada-guimaraes"
    }
};


class CriarPlaylist extends React.Component{
  state={
    inputNomePlaylist:"",
  }
  inseirNomeDaPlaylist=(event)=>{
    this.setState({inputNomePlaylist:event.target.value});
  };
  criarPlaylist =()=> {
     const body={
       name: this.state.inputNomePlaylist
     };
     axios
      .post(urlPlaylist,body,headers)
      .then((res)=>{
        alert("Sucesso!Playlist criada");
        this.setState({inputNomePlaylist:""})
      })
      .catch((err)=> {
        alert(err.response.data.message)
      })
  }
    render(){
      return (
        <div>
          <h4>Cadastre aqui sua playlist</h4>
          <label>Nome</label>
          <input
            value={this.state.inputNomePlaylist}
            onChange={this.inseirNomeDaPlaylist}
          />
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
          <button onClick={this.props.changePage}>Ver playlists</button>
        </div>
      );
    }
    
  }
  
  export default CriarPlaylist;