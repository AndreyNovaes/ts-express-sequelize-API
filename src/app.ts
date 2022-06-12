import express, { Request, Response } from 'express';
import loginRouter from './handleLoginRoute/login.router';
import matchesRouter from './handleMatchesRoute/matches.router';

const app = express();

app.use(express.json());
app.get('/', (_req: Request, res: Response) => res.json({ message: 'Hello World' }));
app.use('/login', loginRouter);
app.use('/matches', matchesRouter);

export default app;
