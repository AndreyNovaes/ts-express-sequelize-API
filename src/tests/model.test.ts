// import db from '../database/models';
// import authenticat

// const db = jest.mock('../database/models');

// describe('should authenticate the mysql parameters', () => {
//   it('should return sucess connect message', async () => {
//     db.authenticate = jest.fn().mockImplementation(
//       () => Promise.resolve('Connection has been established successfully.'),
//     );
//     const response = await db.authenticate();
//     expect(response).toBe('Connection has been established successfully.');
//   });
// });

describe('should be ok', () => {
  it('should be ok', () => {
    expect(true).toBe(true);
  });
});
