import { Request, Response } from 'express';
import { app } from '../index';

// path variables => qualquer coisa

app.get('/test/hello', (req: Request, res: Response) => res.send('olá mundo')); // rota pré-determinada

app.get('/test/:number', (req: Request, res: Response) => {
   const numero = Number(req.params.number);
   res.send(`Seu número da sorte é ${numero}`);
}); // rota variavel
