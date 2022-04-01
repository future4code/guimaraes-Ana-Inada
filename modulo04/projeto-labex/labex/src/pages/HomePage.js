import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate=useNavigate()

  const goToListTrips=()=>{
    navigate('/lista_de_viagens')
  }
  const goToLogin=()=>{
    navigate('/login')
  }
  return (
    <div>
      <p>Home Page</p>
      <button onClick={goToListTrips}>Ver Viagens</button>
      <button onClick={goToLogin}>Área de Admin</button>
    </div>
  );
}

 