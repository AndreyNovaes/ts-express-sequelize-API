import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());
app.get('/test', (_req: Request, res: Response) => res.json({ message: 'Hello World, restarta ai, restarta denovasdfsafasfaso' }));

export default app;
