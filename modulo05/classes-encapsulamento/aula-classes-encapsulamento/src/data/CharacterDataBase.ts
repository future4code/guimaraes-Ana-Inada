import knex from "knex";
import dotenv from "dotenv";
import { Character } from "./Character";

dotenv.config();

export class CharacterDataBase {

    private connection = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
      }
    });

    public getAll = async () => {
        try {
            const result = await this.connection('Characters')
            .select('*')

            return result
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message); 
        }
    }

    public create = async (character :Character) => {
        try {
            await this.connection('Characters')
            .insert({
                id: character.getId(), 
                name: character.getName(), 
                team: character.getTeam(), 
                age: character.getAge()
            })
            // Ou 
            // .insert(character) 
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message); 
        }
    }
}

