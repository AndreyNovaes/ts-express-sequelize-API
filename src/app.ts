import express, { Request, Response } from 'express';
import loginRouter from './Login/login.router';
import teamsRouter from './Teams/teams.router';
import matchesRouter from './Matches/matches.router';

const app = express();

app.use(express.json());
app.get('/', (_req: Request, res: Response) => res.json({ message: 'Hello World' }));
app.use('/login', loginRouter);
app.use('/teams', teamsRouter);
app.use('/matches', matchesRouter);

export default app;
