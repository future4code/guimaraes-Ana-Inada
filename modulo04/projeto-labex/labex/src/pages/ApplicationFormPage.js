import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function AplicationFormPage() {
  const navigate=useNavigate()
    const goToBack=()=>{
        navigate(-1)
    }
  return (
    <div>
      <p>Canditadar-se</p>
      <button>Enviar</button>
      <button onClick={goToBack}>Voltar</button>
    </div>
  );
}