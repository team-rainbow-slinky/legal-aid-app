import request from 'supertest';
import app from '../src/routes/app';
import { org1, org1Booking1, org1Booking2 } from './testData';
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
        expect(res.body).toEqual(null);
      })
  });

  it('creates a new booking', async () => {
    const tokens = await getTokens();
    const newBooking = await getBooking({ swisId: org1Booking1.swisId });
    newBooking.swisId = '99955';
    return request(app)
      .post('/api/bookings')
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .send(newBooking)
      .then(res => {
        expect(res.body).toEqual({
          ...newBooking,
          _id: expect.any(String)
        })
      })
  });

  it('creates multiple new bookings', async () => {
    const tokens = await getTokens();
    const newBooking1 = await getBooking({ swisId: org1Booking1.swisId });
    const newBooking2 = await getBooking({ swisId: org1Booking2.swisId });
    newBooking1.swisId = '99955';
    newBooking2.swisId = '55599';
    return request(app)
      .post('/api/bookings/bulk')
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .send([newBooking1, newBooking2])
      .then(res => {
        expect(res.body.length).toEqual(2);
        expect(res.body[0]).toEqual({
          ...newBooking1,
          _id: expect.any(String)
        });
        expect(res.body[1]).toEqual({
          ...newBooking2,
          _id: expect.any(String)
        });
      })
  });

  it('updates a booking', async () => {
    const tokens = await getTokens();
    const updatedBooking = await getBooking({ swisId: org1Booking1.swisId });
    updatedBooking.gender = 'a new gender';
    updatedBooking.mcsoAge = 100;
    return request(app)
      .put(`/api/bookings/${updatedBooking._id}`)
      .set('Authorization', `Bearer ${tokens.org1User1}`)
      .send(updatedBooking)
      .then(res => {
        expect(res.body).toEqual(updatedBooking)
      })
  });

});