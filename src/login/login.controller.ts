import { Request, Response } from 'express';
import loginService from './login.service';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await loginService(email, password);
  if (!response) {
    res.status(400).json({ message: 'Invalid email or password' });
  } else {
    res.status(200).json(response);
  }
};

export default loginController;
