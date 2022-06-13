import { Router } from 'express';
import matchesController from './matches.controllers';

const router = Router();

router
  .get('/', matchesController.getMatches)
  .post('/', matchesController.createMatch)
  .patch('/:id/finish', matchesController.finishMatch);

export default router;
