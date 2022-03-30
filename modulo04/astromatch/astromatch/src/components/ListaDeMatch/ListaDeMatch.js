import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
import {profile,fetchProfileToChoose} from '../../App'
import {CardTela,Header,HeaderTela,Titulo,Botao} from '../CardPrincipal/CardPrincipal'


const CardMatches=styled.div`
  height: 10vh;
  width: auto;
  display: flex;
  flex-direction: row;
  
`
const Img=styled.img`
  max-width: 15%;
  height: auto;
  border-image: fill;
  margin-right: 30px;
`
const Subtitulo=styled.h4`
color:hsl(345deg 99% 69%);
`
export default function ListaDeMatch(prop) {
    const [matches, setMatches]=useState([]);
    const getMatches=()=>{
      axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`)
      .then((res)=>{
        console.log(res.data.matches)
        setMatches(res.data.matches)
      })
      .catch((err)=>console.log(err))
    }
    
    useEffect(()=>{
      getMatches()
    },[])
    return (
      <div>
        <Header/>
        <CardTela>
        <HeaderTela>
          <Titulo> astroMatch</Titulo>
          <img src="https://cdn-icons-png.flaticon.com/512/1836/1836479.png" width="25px" height="25px"/>
          <Botao onClick={prop.onClick}>
            <img src="https://cdn-icons-png.flaticon.com/512/6945/6945049.png" width="25px" height="25px" />
          </Botao>
        </HeaderTela> 
          <Subtitulo> tela de Matches</Subtitulo>
          
          {matches.map((perfil)=>(
            <CardMatches>
              <Img src={perfil.photo} alt={perfil.name}/>
              <p>{perfil.name}</p>
            </CardMatches>
          ))}
        </CardTela>
      </div>
      
      
    )
  }