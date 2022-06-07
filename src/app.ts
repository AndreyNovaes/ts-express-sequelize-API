import express, { Request, Response } from 'express';
import loginRouter from './login/login.router';

const app = express();

app.use(express.json());
app.get('/', (_req: Request, res: Response) => res.json({ message: 'Hello World, restarta ai, restarta denovasdfsafasfaso' }));
app.use('/login', loginRouter);

export default app;
