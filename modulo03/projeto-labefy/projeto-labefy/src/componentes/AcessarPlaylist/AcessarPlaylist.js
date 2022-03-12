import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import { Player } from 'video-react';

class AcessarPlaylist extends React.Component{
  state={
    inputNome:"",
    inputArtista:"",
    inputUrl:"",
  }
  inseirNome=(event)=>{
    this.setState({inputNome:event.target.value});
  };
  inseirArtista=(event)=>{
    this.setState({inputArtista:event.target.value});
  };
  inseirUrl=(event)=>{
    this.setState({inputUrl:event.target.value});
  };
  adicionarMusica=(playlistId)=>{
    const body={
      name:this.state.inputNome,
      artist:this.state.inputArtista,
      url:this.state.inputUrl
    };
    axios
    .post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,      
        body,
        {
          headers:{
            Authorization: "ana-inada-guimaraes"
          }
        }
    )
    .then((res)=>{
      alert("Sua música foi adicionada com sucesso!");
      this.props.pegarMusicasPlaylists(playlistId,this.props.playlistMusicas.nome)
      this.setState({inputNome:""})
      this.setState({inputArtista:""})
      this.setState({inputUrl:""})
      
    })
    .catch((err)=>{
      alert(err.response)
    })
  }
  confirmarEApagar=(id)=>{
    if(window.confirm("Certeza que deseja apagar a playlist?")){
      return this.apagarMusica(id)
    }else{
      return alert("Continua salva")
    }
  }
  apagarMusica=(musicaId)=>{
    axios
    .delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistMusicas.id}/tracks/${musicaId}`,      
        {
          headers:{
            Authorization: "ana-inada-guimaraes"
          }
        }
    )
    .then((res)=>{
      alert("Apagado com sucesso!")
      this.props.pegarMusicasPlaylists(this.props.playlistMusicas.id,this.props.playlistMusicas.nome)
      console.log(res)
    })
    .catch((err)=>console.log(err))
  }
  render(){
    const listaDeMusicas= this.props.playlistMusicas.faixas.map((musica)=>{
      return(
        <div key={musica.id}>
          <p>Nome: {musica.name}</p>
          <p> Artista: {musica.artist}</p>
          <audio autoplay="autoplay" controls="controls">
            <source src={musica.url} type="audio/mp3" />
          </audio>
          <button onClick={()=> this.confirmarEApagar(musica.id)}>Excluir</button>
        </div>
      )
    })
    return (
      <div>
        <h4>Músicas da playlist {this.props.playlistMusicas.nome}</h4>
        <button onClick={this.props.changePage}>Ver playlists</button>
        <h4>Adicionar música</h4>
        <div> 
          <label>Nome da Música</label>
          <input
            value={this.state.inputNome}
            onChange={this.inseirNome}
          />
          <label>Nome do artista</label>
          <input
            value={this.state.inputArtista}
            onChange={this.inseirArtista}
          />
          <label>url</label>
          <input
            value={this.state.inputUrl}
            onChange={this.inseirUrl}
          />
          <button onClick={()=>this.adicionarMusica(this.props.playlistMusicas.id)}>Adicionar Música</button>
        </div>
        
        {listaDeMusicas}
      </div>
    );
  }
  
}

export default AcessarPlaylist;