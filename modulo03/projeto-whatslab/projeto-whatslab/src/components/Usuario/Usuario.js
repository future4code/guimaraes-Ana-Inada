import React from 'react'
import styled from 'styled-components'

const InputComentario=styled.input`
    font-size: 12px;
    width: 100px;
    height: 20px ;
    border: 2px solid gray;
    padding: 3px;
    margin: 5px;
    background-color: white;
`
class Usuario extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<InputComentario
            placeholder={'Usuário'}
            onChange={this.props.onChangeUsuario}
            value={this.props.valorUsuario}
            />
        )
    }
}
export default Usuario; 