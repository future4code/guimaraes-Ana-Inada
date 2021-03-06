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
    constructor(props){
        super(props)
    }
    render(){
        return(<InputMensagem
            placeholder={'Mensagem'}
            onChange={this.props.onChangeMensagem}
            value={this.props.valorMensagem}
            />
        )
    }
}
export default Mensagem; 