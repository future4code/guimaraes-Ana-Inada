import styled from 'styled-components';
import React from 'react';
import CriarPlaylist from './componentes/CriarPlaylist/CriarPlaylist'
import VerTodasPlaylists from './componentes/VerTodasPlaylists/VerTodasPlaylists'
import axios from 'axios';

const urlPlaylist = 
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
  headers:{
    Authorization: "ana-inada-guimaraes"
  }
};

class App extends React.Component{

  state={
    playlistsSalvas:[],
    currentPage:"CriarPlaylist"
  };

  componentDidMount() {
    this.pegarPlaylists();
  }  
  pegarPlaylists = () => {
    axios
      .get(urlPlaylist, headers)
      .then((res) => {
        this.setState({ playlistsSalvas: res.data.result.list });
        console.log(res.data.result.list);
      })
      .catch((err) => console.log(err));
  };
  changePage = () => {
    if (this.state.currentPage === "CriarPlaylist") {
      this.setState({ currentPage: "VerTodasPlaylists" });
    } else {
      this.setState({ currentPage: "CriarPlaylist" });
    }
  };
  
  render(){
    return (
      <div> 
        {this.state.currentPage==="CriarPlaylist"?(
          <CriarPlaylist/>
        ):(
          <VerTodasPlaylists
          pegarPlaylists={this.pegarPlaylists}
          playlistsSalvas={this.state.playlistsSalvas}
          />
        )}
        <button onClick={this.changePage}>Trocar de tela</button>
      </div>
    );
  }
  
}

export default App;
