import { Router } from 'express';
import { loginTokenValidation, loginDataValidation } from './login.middlewares';
import loginController from './login.controller';

const router = Router();

router
  .post('/', loginDataValidation, loginController.handleLogin)
  .get('/validate', loginTokenValidation);

export default router;
