import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function TripDetailsPage() {
    return(

        <div>
            <p>Nome da Viagem</p>
            <p>Candidatos Pendentes</p>
            <button> Aprovar</button>
            <button>Reprovar</button>
            <p> Candidatos Aprovados</p>
        </div>
    )
}