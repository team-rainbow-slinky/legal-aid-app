import React from 'react';
import SearchMCSOForm from './SearchMCSOForm';
import { shallow } from 'enzyme';

describe('searchMCSOForm component', () => {
  it('renders a form', () => {
    const wrapper = shallow(<SearchMCSOForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
