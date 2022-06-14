import supertest from 'supertest';
import db from '../database/models';
import app from '../app';

describe('test route /matches', () => {
  afterAll(async () => {
    // Closing the connection to the database after all tests are finished.
    await db.close();
  });
  it('test getAllMatches GET /matches', async () => {
    // should return an array of matches with the name of the teams
    const response = await supertest(app).get('/matches');
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('homeTeam');
    expect(response.body[0]).toHaveProperty('homeTeamGoals');
    expect(response.body[0]).toHaveProperty('awayTeam');
    expect(response.body[0]).toHaveProperty('awayTeamGoals');
    expect(response.body[0]).toHaveProperty('inProgress');
    expect(response.body[0]).toHaveProperty('teamHome');
    expect(response.body[0]).toHaveProperty('teamAway');
  });
  it('test getAllMatches GET /matches with inProgress=true', async () => {
    // should return an array of matches what is in progress with the name of the teams
    const response = await supertest(app).get('/matches?inProgress=true');
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('homeTeam');
    expect(response.body[0]).toHaveProperty('homeTeamGoals');
    expect(response.body[0]).toHaveProperty('awayTeam');
    expect(response.body[0]).toHaveProperty('awayTeamGoals');
    expect(response.body[0]).toHaveProperty('inProgress');
    expect(response.body[0]).toHaveProperty('teamHome');
    expect(response.body[0]).toHaveProperty('teamAway');
    expect(response.body[0].inProgress).toBe(1);
  });
  it('test getAllMatches GET /matches with inProgress=false', async () => {
    // should return an array of matches what is not in progress with the name of the teams
    const response = await supertest(app).get('/matches?inProgress=false');
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('homeTeam');
    expect(response.body[0]).toHaveProperty('homeTeamGoals');
    expect(response.body[0]).toHaveProperty('awayTeam');
    expect(response.body[0]).toHaveProperty('awayTeamGoals');
    expect(response.body[0]).toHaveProperty('inProgress');
    expect(response.body[0]).toHaveProperty('teamHome');
    expect(response.body[0]).toHaveProperty('teamAway');
    expect(response.body[0].inProgress).toBe(0);
  });
  it('test CreateTeam POST /matches', async () => {
    // should return a json object with the new team
    const response = await supertest(app).post('/matches').send({
      homeTeam: 1,
      homeTeamGoals: 1,
      awayTeam: 6,
      awayTeamGoals: 2,
      inProgress: true,
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('homeTeam');
    expect(response.body).toHaveProperty('awayTeam');
    expect(response.body).toHaveProperty('homeTeamGoals');
    expect(response.body).toHaveProperty('awayTeamGoals');
    expect(response.body).toHaveProperty('inProgress');
  });
});
