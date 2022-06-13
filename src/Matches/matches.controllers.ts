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
  const {
    homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
  } = req.body;
  const match = await matchesServices.createMatch(
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  );
  return res.status(201).json(match);
};

const finishMatch = async (req: Request, res: Response) => {
  const isMatchFinished = await matchesServices.finishMatch(req.params.id);
  if (isMatchFinished) {
    return res.status(200).json({ message: `Match with id ${req.params.id} finished` });
  }
  return res.status(404).json({ message: `Match with id ${req.params.id} not found` });
};

export default {
  getMatches,
  createMatch,
  finishMatch,
};
