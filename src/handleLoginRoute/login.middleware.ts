import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { emailValidation } from './login.utils';
import users from '../database/models/users';

export const loginDataValidation = (req: Request, res: Response, next: NextFunction)
: Response | void => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.status(401).json({ message: 'Email and password are required' });
  }
  if (!email) {
    return res.status(401).json({ message: 'Email is required' });
  }
  if (!password) {
    return res.status(401).json({ message: 'Password is required' });
  }
  if (!emailValidation(email)) {
    return res.status(401).json({ message: 'Email must be valid' });
  }
  return next();
};

export const loginTokenValidation = async (req: Request, res: Response) => {
  const SECRET = fs.readFileSync('secret.jwt.key').toString().trim();
  if (req.headers && req.headers.authorization) {
    try {
      const decode = jwt.verify(req.headers.authorization, SECRET);
      const { email } = decode as JwtPayload;
      const user = await users.findOne({ where: { email } });
      return res.status(200).json(user!.role);
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
  return res.status(401).json({ message: 'Token is required' });
};
