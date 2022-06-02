import express from "express";
import {Request,Response} from "express";
import { AddressInfo } from "net";
import cors from "cors";
export const app = express();

app.use(cors());
app.use(express.json());
app.listen(3003, ()=>{
    console.log(" Servidor funcionando")
})

// exercício 1
app.get("/", (req, res) => {          
    res.status(200).send ("Deu certo!")
})
//
//
//
//exercício 2

app.post("/cadastro/:name", (req:Request, res: Response)=>{

    console.log(req.body)

    res.status(200).send("Usuário cadastrado com sucesso")
})