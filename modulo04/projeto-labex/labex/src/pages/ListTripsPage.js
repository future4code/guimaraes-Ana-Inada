import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function ListTripsPage() {
  const navigate=useNavigate()
    const goToBack=()=>{
        navigate(-1)
    }
    const goToForm=()=>{
      navigate('/trips/application')
    }
  return (
    <div>
      <p>Lista de Viagens</p>
      <button onClick={goToForm}>Inscrever-se</button>
      <button onClick={goToBack}>Voltar</button>
    </div>
  );
}

 