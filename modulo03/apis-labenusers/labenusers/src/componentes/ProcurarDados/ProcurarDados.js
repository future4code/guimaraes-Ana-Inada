import React from "react";
import styled from "styled-components";

class ProcurarDados extends React.Component{
    
    render(){
        return (
            <div>
                {this.props.listaRenderizada}
            </div>
        );
    }
}

export default ProcurarDados