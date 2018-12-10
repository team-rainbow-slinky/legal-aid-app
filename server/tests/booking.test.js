import { getBooking } from './testHelper';
import { org1Booking1 } from './testData';

test('test', async () => {
  const booking = await getBooking({ swisId: '12345' })
  expect(booking).toEqual({
    ...org1Booking1,
    _id: expect.any(String),
    org: expect.any(String),
    __v: 0
  });
})