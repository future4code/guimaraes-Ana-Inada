import React from 'react';


export default class Select extends React.Component{
    
  render(){

    return(
        <select>
        {this.props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
      </select>
    )
  }
}