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

class VerTodasPlaylists extends React.Component{
  
  apagarPlaylist=(id)=>{
    confirmarEApagar=()=>{
      if(confirm("Certeza que deseja apagar a playlist?")===true){
        return this.apagarPlaylist()
      }else{
        return alert("Continua salva")
      }
    }
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers:{
            Authorization: "ana-inada-guimaraes"
          }
        }
      )
      .then((res)=>{
        alert("Apagado com sucesso!")
        this.props.pegarPlaylists()
        console.log(res)
      })
  }
  
  render(){
      const listaDePlaylists= this.props.playlistsSalvas.map((playlist)=>{
        return(
          <div key={playlist.id}>
            <p>{playlist.name}</p>
            <button onClick={()=> this.apagarPlaylist(playlist.id)}>Apagar</button>
          </div>
        )
      })
          
    return (
      <div>
        <h4>Lista de playlist</h4>
        {listaDePlaylists}
      </div>
    );
  }
    
}
  
  export default VerTodasPlaylists;