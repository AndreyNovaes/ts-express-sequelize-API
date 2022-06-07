import { Router } from 'express';
import loginBodyValidations from './login.Validation';
import loginController from './login.controller';

const router = Router();

router
  .post('/', loginBodyValidations, loginController);

export default router;
