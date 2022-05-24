import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
import CardPrincipal from './components/CardPrincipal/CardPrincipal';
import ListaDeMatch from './components/ListaDeMatch/ListaDeMatch';


export default function App() {
  const [tela,setTela ]= useState(true);
  const choose=()=>{
    setTela(false)
  }
  const lista=()=>{
    setTela(true)
  }
  let pagina= tela?(
    <CardPrincipal onClick={choose}/>
  ): (
    <ListaDeMatch onClick={lista}/>
  )
  return (
    <div>
        {pagina}
    </div>
    
  )
}
