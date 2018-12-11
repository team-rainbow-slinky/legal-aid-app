import request from 'supertest';
import app from '../src/routes/app';
import { org1 } from './testData';
import { getTokens, getOrg } from './testHelper';

describe('booking tests', () => {

  it('gets a booking by id if you are an authorized user of that org', async () => {
    const tokens = await getTokens();
    const booking = await getOrg({ name: org1.name });
    return request(app)
      .get(`/api/orgs/${org._id}`)
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .then(res => {
        expect(res.body).toEqual({ ...org })
      })
  });

  it('returns an error if you are not an authorized user of that org', async () => {
    const tokens = await getTokens();
    const org = await getOrg({ name: org1.name });
    return request(app)
      .get(`/api/orgs/${org._id}`)
      .set('Authorization', `Bearer ${tokens.org2User1}`)
      .then(res => {
        expect(res.status).toEqual(403)
      })
  });

});