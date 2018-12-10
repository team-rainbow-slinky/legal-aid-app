import request from 'supertest';
import app from '../src/routes/app';
import { org1User1, org1 } from './testData';
import { getTokens, getUser, getOrg } from './testHelper';

describe('app routes', () => {
  it('creates a user', () => {
    return getOrg({ name: org1.name })
      .then(org => {
        return request(app)
          .post('/api/users/signup')
          .send({ ...org1User1, org: org._id})
          .then(res => {
            expect(res.body).toEqual({
              _id: expect.any(String),
              email: org1User1.email,
              org: org._id
             });
             expect(res.get('X-AUTH-TOKEN')).toEqual(expect.any(String))
          })
      });
  });

  it('signs in a user', async () => {
    return request(app)
      .post('/api/users/login')
      .send({ email: org1User1.email, password: org1User1.password})
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          email: org1User1.email,
          org: expect.any(String)
        });
        expect(res.get('X-AUTH-TOKEN')).toEqual(expect.any(String))
      });
  });

  it('fails to sign in a user with a bad password', async () => {
    return request(app)
      .post('/api/users/login')
      .send({ email: org1User1.email, password: '1234567' })
      .then(res => {
        expect(res.status).toEqual(401);
      });
  });

  it('can verify a user', async () => {
    const tokens = await getTokens();
    const user = await getUser({ email: org1User1.email });
    return request(app)
      .get('/api/users/verify')
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .then(res => {
        expect(res.body).toEqual({ ...user })
      })
  });
});