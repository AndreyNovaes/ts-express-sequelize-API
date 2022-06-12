import matches from '../database/models/matches';
import teams from '../database/models/teams';

const getAllMatches = async () => {
  const allMatches = await matches.findAll({ raw: true });
  const allTeams = await teams.findAll({ raw: true });
  const matchesWithTeams = allMatches.map((match) => ({
    id: match.id,
    homeTeam: match.homeTeam,
    homeTeamGoals: match.homeTeamGoals,
    awayTeam: match.awayTeam,
    awayTeamGoals: match.awayTeamGoals,
    inProgress: match.inProgress,
    teamHome: allTeams.filter((team) => team.id === match.homeTeam).map((team) => team.teamName)[0],
    teamAway: allTeams.filter((team) => team.id === match.awayTeam).map((team) => team.teamName)[0],
  }));
  return matchesWithTeams;
};

export default {
  getAllMatches,
};
