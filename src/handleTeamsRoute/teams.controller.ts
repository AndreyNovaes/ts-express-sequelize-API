import { Request, Response } from 'express';
import teamsService from './teams.service';

const getTeams = async (req: Request, res: Response) => {
  const teams = await teamsService.getAllTeams();
  if (!teams) {
    res.status(404).json({ message: 'No teams found' });
  } else {
    res.status(200).json(teams);
  }
  return teams;
};

export default {
  getTeams,
};
