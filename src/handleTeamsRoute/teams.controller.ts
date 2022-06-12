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

const getTeamById = async (req: Request, res: Response) => {
  const teamId = Number(req.params.id);
  if (Number.isNaN(teamId)) {
    return res.status(400).json({ message: 'Invalid team id' });
  }
  const team = await teamsService.getTeamById(teamId);
  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }
  return res.status(200).json(team);
};

export default {
  getTeams,
  getTeamById,
};
