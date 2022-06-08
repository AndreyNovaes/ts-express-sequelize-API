import { Request, Response, NextFunction } from 'express';
import { emailValidation } from './login.utils';

const loginBodyValidations = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  if (!emailValidation(email)) {
    return res.status(400).json({ message: 'Email must be valid' });
  }
  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }
  next();
};

export default loginBodyValidations;
