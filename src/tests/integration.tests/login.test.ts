import supertest from 'supertest';
import app from '../../app';
import db from '../../database/models';

const adminEmail = 'admin@admin.com';
const adminPassword = 'secret_admin';

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
});
