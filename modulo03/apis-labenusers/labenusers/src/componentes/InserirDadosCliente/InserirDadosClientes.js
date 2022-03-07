import React from "react";
import styled from "styled-components";

const ContaienerInserirdados = styled.span`
background-color: orange;
padding: 15px;
`
const InsiraNome = styled.input`
    border: solid 1px;
`
const InsiraEmail = styled.input`
    border: solid 1px;
`
const BotaoEnviar = styled.button`
    background-color: white;
    border: solid 1px;

`
class InserirDadosClientes extends React.Component{
    
    render(){
        return (
            <ContaienerInserirdados>
                <label> Nome </label>
                <InsiraNome
                    value={this.props.inputNome}
                    onChange={this.props.inserirNome}
                />
                <label> Email</label>
                <InsiraEmail
                    value={this.props.inputEmail}
                    onChange={this.props.inserirEmail}
                />
                <BotaoEnviar onClick={this.props.createUser}>Enviar</BotaoEnviar>
            </ContaienerInserirdados>
        );
    }
}

export default InserirDadosClientes