// import * as jwt from 'jsonwebtoken';
// import * as fs from 'fs';
import users from '../database/models/users';
import { tokenGenerator, passwordValidation } from './login.utils';

const handleLogin = async (email: string, password:string) => {
  const user = await users.findOne({ where: { email } });
  if (user) {
    if (user.password) {
      const isPasswordValid = passwordValidation(password, user.password);
      if (isPasswordValid) {
        const token = tokenGenerator(user.email);
        const { id, username, role } = user;
        return {
          user: {
            id, email, username, role,
          },
          token,
        };
      }
    }
  }
  return false;
};

export default {
  handleLogin,
};
