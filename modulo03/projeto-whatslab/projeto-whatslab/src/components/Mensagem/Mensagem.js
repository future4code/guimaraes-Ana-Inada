import React from 'react'
import styled from 'styled-components'

const InputMensagem=styled.input`
    width: 280px;
    height: 20px;
    border: 2px solid gray;
    padding: 3px;
    margin: 5px;
    background-color: white;
`

class Mensagem extends React.Component{

    state={
        valorMensagem:''
    }

    onChangeMensagem=(event) =>{
        this.setState({valorMensagem:event.target.value})
    }
    render(){
        return(<InputMensagem
            placeholder={'Mensagem'}
            onChange={this.onChangeMensagem}
            value={this.state.valorMensagem}
            />
        )
    }
}
export default Mensagem; 