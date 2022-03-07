import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import styled from "styled-components";

const InsiraUsuario = styled.input`
border: solid 1px;
`
class ProcurarDados extends React.Component{

    render(){
        return (
            <div>
                {this.props.listaRenderizada.length === 0?
                    "Não existe": this.props.listaRenderizada
                }
                <div>_________________________</div>
                <label>Procurar usuário</label>
                    <InsiraUsuario
                         value={this.props.inputUsuario}
                         onChange={this.props.inserirUsuario}
                    />
                    <button onClick={this.props.buscarDados}>Procurar Nome</button>
            </div>
        );
    }
}

export default ProcurarDados