import supertest from 'supertest';
import app from '../app';
import db from '../database/models';

describe('test route /teams', () => {
  afterAll(async () => {
    // Closing the connection to the database after all tests are finished.
    await db.close();
  });
  it('test GetAllTeams GET /teams', async () => {
    // should return an array of teams
    const response = await supertest(app).get('/teams');
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('teamName');
  });
  it('test GetTeamById GET /teams/:id', async () => {
    // should return a team with the id of 1
    const response = await supertest(app).get('/teams/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('teamName');
  });
  it('test GetTeamById GET /teams/:id with invalid id', async () => {
    // should return a json object with the error message and a status code of 400(Bad Request)
    const response = await supertest(app).get('/teams/abc');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Invalid team id');
  });
  it('test GetTeamById GET /teams/:id with non-existing team with what id', async () => {
    // should return a json object with the error message and a status code of 404(Not Found)
    const response = await supertest(app).get('/teams/100');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Team not found');
  });
});
