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
    },
    {
        userID: 2,
        id:5,
        title:"banho nas gatas",
        completed: false, 
    },
    {
        userID: 2,
        id:6,
        title:"lavar cabelo",
        completed: true, 
    },
    {
        userID: 2,
        id:7,
        title:"varrer frentre",
        completed: false, 
    },
    {
        userID: 2,
        id:8,
        title:"fazer a sobrancelha",
        completed: false, 
    },
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
app.post('/tarefas', (req:Request, res: Response)=>{
    try{
        const id= req.body.userID;
        const titulo=  req.body.title
        const idAnterior= arrayAfazeres[arrayAfazeres.length-1].id
        const novaTarefa:Afazeres={
            userID: id,
            id: Date.now(),
            title: titulo,
            completed: false
        };
        arrayAfazeres.push(novaTarefa)
        res.send(arrayAfazeres)

    }catch (error: any) {
        response.end(error.message);
     }
}
)
//
// exercício 6
//
//
app.put('/tarefas/:id/completed', (req:Request, res:Response)=>{
    try{
        const id=Number(req.params.id)
        arrayAfazeres.map((tarefa)=>{
            if(id === tarefa.id){
                return tarefa.completed = !tarefa.completed
            }
        }) 
        res.send(arrayAfazeres)
    }catch(error:any){
        res.end(error.message);
    }
})
//
//
//exercício 7
// 
//
// app.delete('/tarefas/:id', (req:Request, res:Response)=>{
//     try{
//         const id=Number(req.params.id)
//         arrayAfazeres.map((tarefa)=>{
//             if(id === tarefa[i].id){
//                 return 
//             }
//         }) 
//         res.send(arrayAfazeres)
//     }catch(error:any){
//         response.end(error.message);
//     }
// })

//
// Exercício 8 
//
//
app.get('/users/:id/todos', (req:Request,res:Response)=>{
    try{
        const id=Number(req.params.id)

        const tarefaUser =arrayAfazeres.filter((user)=>{
          if (id === user.userID){
              return user
          }
        })
        res.send(tarefaUser)
    }catch(error:any){
        res.end(error.message)
    }
})
