import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";
import Titulo from "../titulo/Titulo";
import Select from "../select/Select";

class Etapa3 extends React.Component{
    

    render(){
       

        return <>
            <Titulo> ETAPA3- INFORMAÇÕES GERAIS DE ENSINO</Titulo>
            <Label>5. Por que você não terminou um curso de graduação?</Label>
            <Input/>
            <Label>6. Você fez algum curso complementar?</Label>
            <Select opcoes={[
                "Nenhum",
                "Curso Técnico",
                "Inglês",
            ]}
            />
        </>
        
    }
}
export default Etapa3