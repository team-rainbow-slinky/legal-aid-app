import request from 'supertest';
import app from '../src/routes/app';
import { getToken, getUser } from './testHelper';

describe('app routes', () => {
  it('creates a user', () => {
    return request(app)
      .post('/api/users/signup')
      .send({ email: 'test@test.com', password: '1234' })
      .then(res => {
        expect(res.body).toEqual({ _id: expect.any(String), email: 'test@test.com' })
      })
  });

  it('login a user', async () => {
    const user = await getUser();

    return request(app)
      .post('/login')
      .send({ email: user.email, password: 'test1234' })
      .then(res => {
        expect(res.body).toEqual({ _id: expect.any(String), email: user.email });
        expect(res.get('X-AUTH-TOKEN')).toEqual(expect.any(String))
      });
  });

  it('fails to login a user with a bad password', async () => {
    const user = await getUser();

    return request(app)
      .post('/api/users/login')
      .send({ email: user.email, password: '1234567' })
      .then(res => {
        expect(res.status).toEqual(401);
      });
  });

  it('can verify a user', async () => {
    const user = await getUser({ email: 'test1@test.com' });
    const token = getToken();

    return request(app)
      .get('/api/users/verify')
      .set('Authorization', `Bearer ${token}`)
      .then(res => {
        expect(res.body).toEqual({ _id: user._id, email: user.email })
      })
  });
});