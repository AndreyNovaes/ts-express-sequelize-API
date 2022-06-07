import { compareSync } from 'bcryptjs';
import users from '../database/models/users';
import { tokenGenerator } from './login.utils';

const loginService = async (email: string, password:string) => {
  const user = await users.findOne({ where: { email } });
  if (user && user.password && compareSync(password, user.password)) {
    return {
      token: tokenGenerator(user.email),
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };
  }
  return false;
};

export default loginService;
