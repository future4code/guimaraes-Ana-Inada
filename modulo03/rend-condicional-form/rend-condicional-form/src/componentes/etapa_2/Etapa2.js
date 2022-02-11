import React from "react";
import Input from "../input/Input";
import ContainerPai from "../container_app/Container";
import Label from "../label/Label";
import Titulo from "../titulo/Titulo";
import Botao from "../botao/Botao";

class Etapa2 extends React.Component{
    

    render(){
       

        return <>
            <Titulo> ETAPA2- INFORMAÇÕES DE ENSINO superior</Titulo>
            <Label> 5. Qual curso?</Label>
            <Input/>
            <Label> 6. Qual a unidade de ensino?</Label>
            <Input/>
            <Label> 3. Qual o seu email?</Label>
        </>
        
    }
}
export default Etapa2