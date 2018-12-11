import { getMcsoRecords } from './scraper';

describe('scraper tests', () => {

  it('gets some data', async () => {
    const bookings = await getMcsoRecords();
    expect(bookings.length).toBeGreaterThan(10);
  }, 30000);

});
