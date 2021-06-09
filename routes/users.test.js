const supertest = require('supertest');

beforeEach(() => {
  jest.resetModules();
});

describe('GET /', () => {
  let app;
  let mockUsers = [];

  beforeEach(() => {
    jest.mock('../models/User', () => ({
      findAll: jest.fn(() => mockUsers),
    }));

    app = require('../app');
  });

  describe('when there are no users', () => {
    it('returns an empty response', async () => {
      const response = await supertest(app).get('/users');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('when there are some users', () => {
    beforeEach(() => {
      mockUsers = [
        {
          id: 1,
          firstName: 'Harry',
          lastName: 'Potter',
        },
        {
          id: 2,
          firstName: 'Ron',
          lastName: 'Weasley',
        },
      ];
    });

    it('returns the users as JSON', async () => {
      const response = await supertest(app).get('/users');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockUsers);
    });
  });
});
