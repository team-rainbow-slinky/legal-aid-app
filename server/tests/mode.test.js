import request from 'supertest';
import app from '../src/routes/app';

describe('mode tests', () => {
  it('returns the current mode from the env', () => {
    process.env.MODE = 'test';
    return request(app)
      .get('/api/mode')
      .then(result => {
        expect(result.body).toEqual('test');
      });
  });

  it('drops data if mode is demo', () => {
    process.env.MODE = 'demo';
    return request(app)
      .get('/api/mode/dropAll')
      .then(result => {
        expect(result.body).toEqual({ drop: true });
      });
  });

  it('does not drop data if mode is not demo', () => {
    process.env.MODE = 'live';
    return request(app)
      .get('/api/mode/dropAll')
      .then(result => {
        expect(result.body).toEqual({ drop: false });
      });
  });
});
