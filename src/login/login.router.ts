import { Router } from 'express';
import loginBodyValidations from './login.Validation';
// import loginService from './login.service';

const router = Router();

router
  .post('/', loginBodyValidations);

export default router;
