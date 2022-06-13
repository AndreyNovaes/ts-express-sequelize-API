import { Request, Response } from 'express';
import matchesServices from './matches.services';

const getMatches = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const allMatches = await matchesServices.getMatches();
  if (inProgress === 'true') {
    const inProgressMatches = allMatches.filter((match) => match.inProgress);
    return res.status(200).json(inProgressMatches);
  } if (inProgress === 'false') {
    const notInProgressMatches = allMatches.filter((match) => !match.inProgress);
    return res.status(200).json(notInProgressMatches);
  }
  return res.status(200).json(allMatches);
};

const createMatch = async (req: Request, res: Response) => {
  const match = await matchesServices.createMatch(
    req.body.homeTeam,
    req.body.awayTeam,
    req.body.homeTeamGoals,
    req.body.awayTeamGoals,
    req.body.inProgress,
  );
  return res.status(201).json(match);
};

export default {
  getMatches,
  createMatch,
};
