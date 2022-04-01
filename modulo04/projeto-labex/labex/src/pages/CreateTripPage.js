import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CreateTripPage() {
  const navigate=useNavigate()
    const goToBack=()=>{
      navigate(-1)
    }
  return (
    <div>
      <p>Criar Viagem</p>
      <button onClick={goToBack}>Voltar</button>
      <button>Criar</button>
    </div>
  );
}