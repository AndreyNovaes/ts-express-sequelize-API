import supertest from 'supertest';
import app from '../../app';
import db from '../../database/models';

describe('test route /teams', () => {
  afterAll(async () => {
    await db.close();
  });
  it('test GetAllTeams GET /teams', async () => {
    const response = await supertest(app).get('/teams');
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('teamName');
    expect(response.body[1].id).toBe(2);
    expect(response.body[1].teamName).toBe('Bahia');
  });
  it('test GetTeamById GET /teams/:id', async () => {
    const response = await supertest(app).get('/teams/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('teamName');
    expect(response.body.id).toBe(1);
    expect(response.body.teamName).toBe('Avaí/Kindermann');
  });
  it('test GetTeamById GET /teams/:id with invalid id', async () => {
    const response = await supertest(app).get('/teams/abc');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Invalid team id');
  });
  it('test GetTeamById GET /teams/:id with non-existing team with what id', async () => {
    const response = await supertest(app).get('/teams/100');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Team not found');
  });
});
