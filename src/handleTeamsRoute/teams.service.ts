import teams from '../database/models/teams';

const getAllTeams = async () => {
  const response = await teams.findAll();
  return response;
};

export default {
  getAllTeams,
};
