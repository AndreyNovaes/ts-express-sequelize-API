import teams from '../database/models/teams';

const getAllTeams = async () => {
  const response = await teams.findAll();
  return response;
};

const getTeamById = async (id: number) => {
  const response = await teams.findOne({ where: { id } });
  return response;
};

export default {
  getAllTeams,
  getTeamById,
};
