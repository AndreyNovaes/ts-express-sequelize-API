import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_req: Request, res: Response) => res.json({ message: 'Hello World, restarta ai, restarta denovasdfsafasfaso' }));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
