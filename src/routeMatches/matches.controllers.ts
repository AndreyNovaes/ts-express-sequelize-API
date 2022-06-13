import { Request, Response } from 'express';
import matchesServices from './matches.services';

const getAllMatches = async (req: Request, res: Response) => {
  const matches = await matchesServices.getAllMatches();
  return res.status(200).json(matches);
};

export default {
  getAllMatches,
};
