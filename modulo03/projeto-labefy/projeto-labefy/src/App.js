import styled from 'styled-components';
import React from 'react';
import CriarPlaylist from './componentes/CriarPlaylist/CriarPlaylist'
import VerTodasPlaylists from './componentes/VerTodasPlaylists/VerTodasPlaylists'
import AcessarPlaylist from './componentes/AcessarPlaylist/AcessarPlaylist';
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
    playlistMusicas:{
      faixas:[],
      nome:"",
      id:""
    },
    currentPage:"VerTodasPlaylists",
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
    if (this.state.currentPage === "VerTodasPlaylists") {
      this.setState({ currentPage: "CriarPlaylist" });
    } else {
      this.setState({ currentPage: "VerTodasPlaylists" });
    }
  };
  
  pegarMusicasPlaylists = (playlistId,nome) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        {
          headers:{
            Authorization: "ana-inada-guimaraes"
          }
        }
      )
      .then((res) => {
        this.setState({ 
          playlistMusicas: {
            faixas:res.data.result.tracks,
            nome,
            id:playlistId
          }, 
          currentPage:"AcessarPlaylist"
        });
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  };
  render(){
    switch (this.state.currentPage) {
      case "VerTodasPlaylists":
        return <VerTodasPlaylists
          pegarPlaylists={this.pegarPlaylists}
          playlistsSalvas={this.state.playlistsSalvas}
          verPlaylist={this.verPlaylist}
          mudarTela={this.mudarTela}
          pegarMusicasPlaylists={this.pegarMusicasPlaylists}
          changePage={this.changePage}
        />;
      case "AcessarPlaylist":
        return <AcessarPlaylist
          playlistMusicas={this.state.playlistMusicas}
          pegarMusicasPlaylists={this.pegarMusicasPlaylists}
          changePage={this.changePage}
        />;
        case "CriarPlaylist":
          return <CriarPlaylist
            changePage={this.changePage}
            />;
      default:case "VerTodasPlaylists":
          return <VerTodasPlaylists/>;
    }
  }
  
}

export default App;
