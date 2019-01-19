import request from 'supertest';
import app from '../src/routes/app';
import { getBookings, getOrgs } from './testHelper';

describe('mode tests', () => {

  it('returns the current mode from the env', () => {
    process.env.MODE = 'test';
    return request(app)
      .get('/api/mode')
      .then(result => {
        expect(result.body).toEqual('test');
      });
  });

  // this should drop the test data that is created before each test (which has 4 bookings)
  // and replace it with the initial data from the heroku folder (which has 0 bookings)
  it('resets initial data if mode is demo', async() => {
    process.env.MODE = 'demo';

    let bookings = await getBookings({});
    expect(bookings.length).toEqual(4);

    const result = await request(app)
      .get('/api/mode/resetData');
    expect(result.body).toEqual({ resetData: true });

    const orgs = await getOrgs({});
    expect(orgs.length).toEqual(2);
    bookings = await getBookings({});
    expect(bookings.length).toEqual(0);
  });

  it('does not drop data if mode is not demo', () => {
    process.env.MODE = 'live';
    return request(app)
      .get('/api/mode/resetData')
      .then(result => {
        expect(result.body).toEqual({ resetData: false });
      });
  });

});
