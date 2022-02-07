import React from 'react'
import styled from 'styled-components'

const ContainerBotao= styled.button`
    width: 55px;
    min-height: 20px;
    border: 2px solid gray;
    padding: 3px;
    margin: 5px;
    background-color: white;
`
class Botao extends React.Component{
    constructor(props){
        super (props)
    }
    render(){
        return(
            <ContainerBotao onClick={this.props.adicionarConversa}>enviar</ContainerBotao>
        )
    }

}
export default Botao; 