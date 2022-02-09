import React from "react";
import Input from "../input/Input";
import ContainerPai from "../container_app/Container";
import Label from "../label/Label";
import Titulo from "../titulo/Titulo";
import Botao from "../botao/Botao";
import Select from "../select/Select";
import Etapa2 from "../etapa_2/Etapa2"

class Etapa1 extends React.Component{
    state={
        pagina:""
    };
    irParaEtapa2 =() => {
        this.setState({pagina: "etapa2"})
    };

    render(){
        let secao;
        switch(this.state.pagina){
            case "etapa2":
                secao = <Etapa2 />;
                break;
            default:
                secao = <p>Nenhuma seção selecionada</p>;
        }

        return <ContainerPai>
            <Titulo> ETAPA1 -DADOS GERAIS</Titulo>
            <Label> 1. Qual o seu nome?</Label>
            <Input/>
            <Label> 2. Qual a sua idade?</Label>
            <Input/>
            <Label> 3. Qual o seu email</Label>
            <Input/>
            <Label> 4. Qual a sua escolaridade?</Label>
            <Select opcoes={[
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo"
            ]}
            />
            <Botao onClick={this.props.onClickEtapa2}>Próxima Etapa</Botao>
        </ContainerPai>
        
    }
}
export default Etapa1