import matches from '../database/models/matches';
import teams from '../database/models/teams';

const getMatches = async () => {
  const allMatches = await matches.findAll({ raw: true });
  const allTeams = await teams.findAll({ raw: true });
  const matchesWithTeams = allMatches.map((match) => ({
    id: match.id,
    homeTeam: match.homeTeam,
    homeTeamGoals: match.homeTeamGoals,
    awayTeam: match.awayTeam,
    awayTeamGoals: match.awayTeamGoals,
    inProgress: match.inProgress,
    teamHome: allTeams.find((team) => team.id === match.homeTeam)!.teamName,
    teamAway: allTeams.find((team) => team.id === match.awayTeam)!.teamName,
    // uso indevido de operador not null assertion(má prática), verificar se, caso seja nulo
    // a aplicação ainda funcionará normalmente no frontend sem cair o banco
  }));
  return matchesWithTeams;
};

export default {
  getMatches,
};
