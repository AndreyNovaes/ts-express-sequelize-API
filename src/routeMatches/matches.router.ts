import { Router } from 'express';
import matchesController from './matches.controllers';

const router = Router();

router
  .get('/', matchesController.getMatches)
  .post('/', matchesController.createMatch);

export default router;
