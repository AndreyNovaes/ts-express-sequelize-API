import { Request, Response } from 'express';
import loginService from './login.services';

const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await loginService.handleLogin(email, password);
  if (!response) {
    res.status(404).json({ message: 'Invalid email or password' });
  } else {
    res.status(200).json(response);
  }
};

export default {
  handleLogin,
};
