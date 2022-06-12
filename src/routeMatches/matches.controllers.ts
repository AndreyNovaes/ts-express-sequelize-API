import { Request, Response } from 'express';
import matchesServices from './matches.services';

const getAllMatches = async (req: Request, res: Response) => {
  const matches = await matchesServices.getAllMatches();
  if (!matches) {
    return res.status(404).json({ message: 'Matches not found' });
  }
  return res.status(200).json(matches);
};

export default {
  getAllMatches,
};
