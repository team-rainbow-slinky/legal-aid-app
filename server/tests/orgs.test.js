import request from 'supertest';
import app from '../src/routes/app';
import { org1 } from './testData';
import { getTokens, getOrg, getBookings } from './testHelper';

jest.mock('../src/services/scraper.js');

describe('org tests', () => {

  it('gets an org by id if you are an authorized user of that org', async () => {
    const tokens = await getTokens();
    const org = await getOrg({ name: org1.name });
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

  it('gets all bookings by orgId if you are an authorized user of that org', async () => {
    const tokens = await getTokens();
    const org = await getOrg({ name: org1.name });
    const bookings = await getBookings({ org: org._id });
    return request(app)
      .get(`/api/orgs/${org._id}/bookings`)
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .then(res => {
        expect(res.body.length).toEqual(2);
        expect(res.body).toContainEqual(bookings[0]);
        expect(res.body).toContainEqual(bookings[1]);
      })
  });

  it('gets latest bookings from mcso that aren\'t already a booking', async () => {
    const tokens = await getTokens();
    const org = await getOrg({ name: org1.name });
    return request(app)
      .get(`/api/orgs/${org._id}/mcso`)
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .then(res => {
        expect(res.body.length).toEqual(5);
      })
  });

  it('further filters bookings from mcso by last name', async () => {
    const tokens = await getTokens();
    const org = await getOrg({ name: org1.name });
    const queryName = 'ble';
    return request(app)
      .get(`/api/orgs/${org._id}/mcso`)
      .query({ name: queryName})
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .then(res => {
        expect(res.body.length).toEqual(2);
        expect(res.body[0].mcsoName.toUpperCase()).toContain(queryName.toUpperCase());
        expect(res.body[1].mcsoName.toUpperCase()).toContain(queryName.toUpperCase());
      })
  })

  it('filters bookings from mcso by date of booking', async () => {
    const tokens = await getTokens();
    const org = await getOrg({ name: org1.name });
    const queryStart = '12/10/2018 03:00 PM';
    const queryEnd = '12/10/2018 08:00 PM';
    return request(app)
      .get(`/api/orgs/${org._id}/mcso`)
      .query({ start: queryStart, end: queryEnd })
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .then(res => {
        expect(res.body.length).toEqual(2);
      })
  });

});
