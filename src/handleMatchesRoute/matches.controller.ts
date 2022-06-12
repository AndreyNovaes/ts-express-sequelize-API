import { Request, Response } from 'express';
import matchesService from './matches.service';

const getMatches = async (req: Request, res: Response) => {
  const matches = await matchesService.getAllMatches();
  if (!matches) {
    res.status(404).json({ message: 'No matches found' });
  } else {
    res.status(200).json(matches);
  }
  return matches;
};

export default {
  getMatches,
};
