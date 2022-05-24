import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function TripDetailsPage() {
    const navigate=useNavigate()
    const goToBack=()=>{
      navigate(-1)
    }
    return(

        <div>
            <button onClick={goToBack}>Voltar</button>
            <p>Nome da Viagem</p>
            <p>Candidatos Pendentes</p>
            <button> Aprovar</button>
            <button>Reprovar</button>
            <p> Candidatos Aprovados</p>
        </div>
    )
}