import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
import {profile,fetchProfileToChoose} from '../../App'

export default function ListaDeMatch(prop) {
    // const []=useState([]);
    
  
    useEffect(()=>{
      
    },[])
    return (
      <div>
          <h3> tela de Matches</h3>
          <button onClick={prop.onClick}>Perfis</button>
      </div>
      
      
      
      
    )
  }