import { Request, Response } from "express";
import { app } from "./app";
import { Character } from "./data/Character";
import { CharacterDataBase } from "./data/CharacterDataBase";
import { connection } from "./data/connection";


app.get('/character', async (req: Request, res: Response) => {
    try {
        const characterDB = new CharacterDataBase()
        const result = await characterDB.getAll()

        res.status(200).send(result)
        
    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}) 

app.post('/character', async (req: Request, res: Response) => {
    try {
        const {name, team, age} = req.body
        const id = Math.random().toString()

        const newCharacter :Character = new Character(id, name, team, age)
        const characterDB = new CharacterDataBase()

        await characterDB.create(newCharacter)

        res.status(200).send("Usuário Criado!")

    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
        
    }
})















