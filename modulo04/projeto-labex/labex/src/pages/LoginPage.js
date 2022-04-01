import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    const navigate=useNavigate()
    const goToBack=()=>{
      navigate(-1)
    }

    const goToAdm=()=>{
      navigate('/admin/trips/list')
    }
  return (
    <div>
      <p>Login</p>
      <button onClick={goToBack}>Voltar</button>
      <button onClick={goToAdm}>Entrar</button>
    </div>
  );
}