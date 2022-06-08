import supertest from 'supertest';
import app from '../app';

describe('/login route tests', () => {
  it('test body with correct email and password', async () => {
    // should return a json object with the user data(without password) and a token
    // should return a status code of 200
    const response = await supertest(app).post('/login');
    expect(response.status).toBe(200);
  });
});
