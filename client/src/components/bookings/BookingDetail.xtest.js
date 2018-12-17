import React from 'react';
import BookingDetail from './BookingDetail';
import render from 'react-test-renderer';

jest.mock('../../services/request.js');

describe('BookingDetail test', () => {

  test('BookingDetail snapshot', () => {
    const editBookingFn = jest.fn();
    const mockBooking = { booking: 'mock' };
    expect(render
      .create(<BookingDetail editBooking={editBookingFn} booking={mockBooking} />)
      .toJSON()).toMatchSnapshot();
  });
});
