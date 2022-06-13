import supertest from 'supertest';
import app from '../../app';
import db from '../../database/models';

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
});
