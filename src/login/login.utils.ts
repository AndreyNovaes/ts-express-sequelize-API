import { compareSync } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

const SECRET = fs.readFileSync('secret.jwt.key').toString().trim();
const encryptedPassword = '$2a$12$EhnaEiodETojicAZRGsYd.krFhHTLgGEVGAUoj8tRBCv0c6hlRKV6'; // 'Test' encrypted

export const emailValidation = (email: string): boolean => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
};

export const passwordValidation = (password: string): boolean => {
  const verifyEncryptedPassword = compareSync(password, encryptedPassword);
  return verifyEncryptedPassword;
};

export const tokenGenerator = (email: string): string => {
  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  return token;
};
