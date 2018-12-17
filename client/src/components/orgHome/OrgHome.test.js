import React from 'react';
import OrgHome from './OrgHome';
import { shallow } from 'enzyme';

describe('OrgHome component', () => {
  it('renders the org home and displays bookings', () => {

    const wrapper = shallow(<OrgHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
