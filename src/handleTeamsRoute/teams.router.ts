import { Router } from 'express';
import teamControllers from './teams.controller';

const router = Router();

router
  .get('/', teamControllers.getTeams);

export default router;
