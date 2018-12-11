import request from 'supertest';
import app from '../src/routes/app';
import { org1, org1Booking1 } from './testData';
import { getTokens, getBooking } from './testHelper';

describe('booking tests', () => {

  it('gets a booking by id if you are an authorized user of that booking\'s org', async () => {
    const tokens = await getTokens();
    const booking = await getBooking({ swisId: org1Booking1.swisId });
    return request(app)
      .get(`/api/bookings/${booking._id}`)
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .then(res => {
        expect(res.body).toEqual({ ...booking })
      })
  });

  it('returns null if you are not an authorized user of that booking\'s org', async () => {
    const tokens = await getTokens();
    const booking = await getBooking({ swisId: org1Booking1.swisId });
    return request(app)
      .get(`/api/bookings/${booking._id}`)
      .set('Authorization', `Bearer ${tokens.org2User1}`)
      .then(res => {
        // expect(res.status).toEqual(403)
        expect(res.body).toEqual(null);
      })
  });

});