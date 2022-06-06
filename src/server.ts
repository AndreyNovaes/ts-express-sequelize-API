import express from 'express';
import { request, response } from 'express';

const app = express()

app.get('/', (_req, res) => {
  return res.json({ message: 'Hello World, restarta ai, restarta denovasdfsafasfaso' })
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
