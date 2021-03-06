import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AdmHomePage() {
  const navigate=useNavigate()
    const goToBack=()=>{
      navigate(-1)
    }

    const goToCreateTrip=()=>{
        navigate('/admin/trips/create')
    }
    const goToDetails=()=>{
      navigate('/admin/trips/:id')
    }
  return (
    <div>
      <p>Painel Administrativo</p>
      <button onClick={goToBack}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToDetails}>Detalhes da Viagem</button>
      <button>Lougout</button>
    </div>
  );
}