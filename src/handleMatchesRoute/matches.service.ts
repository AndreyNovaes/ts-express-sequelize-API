import matches from '../database/models/matches';

const getAllMatches = async () => {
  const response = await matches.findAll();
  return response;
};

export default {
  getAllMatches,
};
