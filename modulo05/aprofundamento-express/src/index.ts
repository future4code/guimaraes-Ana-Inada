import express, { response } from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
// EXPORTA O APP PARA UTILIZAR NOS OUTROS ARQUIVOS
export const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// SERVIDOR ESCUTANDO NA PORTA 3003
app.listen(3003, () => console.log('Server rodando.....'));



//
// exercício 1
//
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
 })

// 
// exercício 2
//
type Afazeres=
    {
        userID: number, 
        id:number,
        title:string,
        completed:boolean,
    }
    

    
//
// exercício 3
//
const arrayAfazeres:Afazeres[]=[
    {
        userID: 1,
        id:1,
        title:"lavar roupa",
        completed: false,
    },
    {
        userID: 1,
        id:2,
        title:"comprar pão",
        completed: false, 
    },
    {
        userID: 1,
        id:3,
        title:"estudar",
        completed: true, 
    },
    {
        userID: 1,
        id:4,
        title:"ração das gatas",
        completed: false, 
    }
]

//
/// exercício 4
//
app.get('/tarefas',
(req:Request,res:Response)=>{
    try{
        console.log(typeof req.query.completed)
        const tarefa = arrayAfazeres.filter((item)=> item.completed === JSON.parse(req.query.completed as 'true' | 'false'));
        res.send(tarefa)
    }catch (error: any) {
        response.end(error.message);
    }
})

// 
// exercício 5
// 
app.post('/tarefas/criar', (req:Request, res: Response)=>{
    try{
        const tarefaNova=req.body
        

    }
})