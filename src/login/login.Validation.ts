import { Request, Response, NextFunction } from 'express';
import { emailValidation, passwordValidation } from './login.utils';

const loginBodyValidations = (req: Request, res: Response, next: NextFunction): Boolean | void => {
  const { email, password } = req.body;
  if (!email || !emailValidation(email)) {
    res.status(400).json({ message: 'Invalid email' });
    return false;
  }
  if (!password || !passwordValidation(password)) {
    res.status(400).json({ message: 'Invalid password' });
    return false;
  }
  return next();
};

export default loginBodyValidations;

// vai chegar um body { email: '', password: '' } será verificao os campos e se estão corretos,
// se não, retorna um erro 400 com uma mensagem descritiva
