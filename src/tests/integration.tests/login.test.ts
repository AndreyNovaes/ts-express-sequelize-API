import supertest from 'supertest';
import app from '../../app';
import db from '../../database/models';

const adminEmail = 'admin@admin.com';
const adminPassword = 'secret_admin';
const userEmail = 'user@user.com';
const userPassword = 'secret_user';

describe('/login route tests', () => {
  afterAll(async () => {
    await db.close();
  });
  it('test body with correct email and password', async () => {
    // should return a json object with the user data(without password) and a token
    // should return a status code of 200
    const response = await supertest(app).post('/login').send({
      email: adminEmail,
      password: adminPassword,
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user).toHaveProperty('email');
    expect(response.body.user).toHaveProperty('username');
    expect(response.body.user).toHaveProperty('role');
    expect(response.body.token).toBeTruthy();
    expect(response.body.user.id).toBe(1);
    expect(response.body.user.email).toBe(adminEmail);
    expect(response.body.user.username).toBe('Admin');
    expect(response.body.user.role).toBe('admin');
  });
  it('test body with incorrect email', async () => {
    // should return a json object with the error message and a status code of 404(Not Found)
    const response = await supertest(app).post('/login').send({
      email: 'wrongAdminEmail@gmail.com',
      password: adminPassword,
    });
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Invalid email or password');
  });
  it('test body with incorrect password', async () => {
    // should return a json object with the error message and a status code of 404(Not Found)
    const response = await supertest(app).post('/login').send({
      email: adminEmail,
      password: 'wrongAdminPassword',
    });
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Invalid email or password');
  });
  it('test body with empty email and password', async () => {
    // should return a json object with the error message and a status code of 401(Bad Request)
    const response = await supertest(app).post('/login').send({
      email: '',
      password: '',
    });
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Email and password are required');
  });
  it('test body with empty email', async () => {
    // should return a json object with the error message and a status code of 401(Bad Request)
    const response = await supertest(app).post('/login').send({
      email: '',
      password: adminPassword,
    });
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Email is required');
  });
  it('test body with empty password', async () => {
    // should return a json object with the error message and a status code of 401(Bad Request)
    const response = await supertest(app).post('/login').send({
      email: adminEmail,
      password: '',
    });
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Password is required');
  });
  it('test body with invalid email', async () => {
    // should return a json object with the error message and a status code of 401(Bad Request)
    const response = await supertest(app).post('/login').send({
      email: 'wrongEmail',
      password: adminPassword,
    });
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Email must be valid');
  });
  it('should return a status code of 401 for invalid token', async () => {
    // should return a json object with the error message and a status code of 401(Bad Request)
    const response = await supertest(app).get('/login/validate').set('Authorization', 'invalidToken');
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Expired or invalid token');
  });
  it('should return a status code of 401 for empty token', async () => {
    // should return a json object with the error message and a status code of 401(Bad Request)
    const response = await supertest(app).get('/login/validate').set('Authorization', '');
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Token is required');
  });
  it('sucessfully retrieve user token && response test for route /login/validate', async () => {
    // should return a json object with the user data(without password) and a token')
    // should return a status code of 200
    const response = await supertest(app).post('/login').send({
      email: userEmail,
      password: userPassword,
    });
    const { token } = response.body;
    // should return the role of the user what is logged in
    // should return, in what case admin with status code of 200
    const loginTokenValidation = await supertest(app)
      .get('/login/validate')
      .set('Authorization', token);
    expect(loginTokenValidation.status).toBe(200);
    expect(loginTokenValidation.body).toBe('user');
  });
  it('sucessfully login to retrieve admin token && response test for route /login/validate', async () => {
    // should return a json object with the user data(without password) and a token')
    // should return a status code of 200
    const response = await supertest(app).post('/login').send({
      email: adminEmail,
      password: adminPassword,
    });
    const { token } = response.body;
    // should return the role of the user what is logged in
    // should return, in what case admin with status code of 200
    const loginTokenValidation = await supertest(app)
      .get('/login/validate')
      .set('Authorization', token);
    expect(loginTokenValidation.status).toBe(200);
    expect(loginTokenValidation.body).toBe('admin');
  });
});
