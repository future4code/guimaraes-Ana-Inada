import React from 'react';
import './CardFormacaoDev.css'

function CardFormacao(props) {
    return(
        <div className='formacao-container'>
            <img src={props.imagem}/>
            <div>
                <h4>{props.faculdade}</h4>
                <p>{props.graduacao}</p>
            </div>
        </div>
    )
}

export default CardFormacao;