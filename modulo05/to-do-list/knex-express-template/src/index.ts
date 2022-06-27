import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import { v4 as uuidv4 } from "uuid";
import knex from "knex";

var parseDate = function (value: any) {
  var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
  if (m)
    value =
      m[5] + "-" + ("00" + m[3]).slice(-2) + "-" + ("00" + m[1]).slice(-2);

  return value;
};

function dateToEN(date: any) {
  return date.split("/").reverse().join("-");
}

const postUsuario = async (
  nome: string,
  id: string,
  email: string,
  apelido: string
): Promise<any> => {
  return await connection("Usuarios")
    .insert({
      nome: nome,
      id: id,
      email: email,
      apelido: apelido,
    })
    .into("Usuarios");
};

app.post("/user", async (req: Request, res: Response) => {
  const { nome, email, apelido } = req.body;
  const id = uuidv4();
  console.log({ nome, email, apelido });
  try {
    const usuario = await postUsuario(nome, id, email, apelido);
    console.log(usuario);
    res.send("usuário craido com sucesso!");
  } catch (err) {
    console.log(err);
  }
});

const getUsuarioId = async (id: string): Promise<any> => {
  const usuario = await connection("Usuarios")
    .select("id", "nome")
    .where("id", id);
  console.log(usuario);
  return usuario;
};

app.get("/user/:id", async (req: Request, res: Response) => {
  console.log("aaaaa");
  const id = req.params.id;
  try {
    const usuario = await getUsuarioId(id);
    res.send(usuario);
  } catch (err) {
    res.send({
      message: err,
    });
  }
});

const putUser = async (
  nome: string,
  id: string,
  email: string,
  apelido: string
): Promise<any> => {
  const userEdit = await connection("Usuarios")
    .update({
      nome: nome,
      email: email,
      apelido: apelido,
    })
    .where("id", id);
  return userEdit;
};
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { nome, email, apelido } = req.body;
    const userEdit = await putUser(nome, id, email, apelido);
    res.send("Ok");
  } catch (err) {
    console.log(err);
  }
});

const postTask = async (
  id: string,
  titulo: string,
  descricao: string,
  data_limite: Date,
  status: string,
  id_criador: string
): Promise<any> => {
  return await connection("Tarefas")
    .insert({
      id: id,
      titulo: titulo,
      descricao: descricao,
      data_limite: data_limite,
      status: status,
      id_criador: id_criador,
    })
    .into("Tarefas");
};

app.post("/task", async (req: Request, res: Response) => {
  const { titulo, descricao, data_limite, status, id_criador } = req.body;
  const id = uuidv4();
  console.log({ titulo, descricao, data_limite, status, id_criador });
  try {
    const tarefa = await postTask(
      id,
      titulo,
      descricao,
      data_limite,
      status,
      id_criador
    );
    console.log(tarefa);
    res.send("Tarefa criada");
  } catch (err) {
    console.log(err);
  }
});

const getTaskById = async (id: string): Promise<any> => {
  const tarefaById = await connection("Tarefas")
    .select([
      "Tarefas.id",
      "titulo",
      "descricao",
      "data_limite",
      "status",
      "id_criador",
      "Usuarios.apelido",
    ])
    .innerJoin("Usuarios", "Usuarios.id", "=", "Tarefas.id_criador")
    .where("Tarefas.id", id);
  console.log(tarefaById);
  return tarefaById;
};

app.get("/task/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const tarefaById = await getTaskById(id);
    res.send(tarefaById);
  } catch (err) {
    res.send({
      message: err,
    });
  }
});

const getUsers = async (): Promise<any> => {
  const users = await connection("Usuarios").select("id", "apelido");

  return users;
};

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});
