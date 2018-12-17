import React from 'react';
import Booking from './Booking';
import { shallow } from 'enzyme';

describe('Booking component', () => {
  it('renders a booking', () => {
    const testBooking = {
      _id: '123',
      preferredName: 'Alex Rankin',
      mcsoName: 'Alexander Rankin',
      mcsoBookingDate: 'December 16, 2018',
      mcsoArrestingAgency: 'Portland Police Bureau'
    };

    const wrapper = shallow(<Booking props={testBooking} />);
    expect(wrapper).toMatchSnapshot();
  });
});
