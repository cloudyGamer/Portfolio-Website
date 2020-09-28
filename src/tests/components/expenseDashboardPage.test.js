import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../components/HomePage';
import expenses from '../fixtures/expenses';

test('should render HomePage with no props', () => {
     const wrapper= shallow(<HomePage xmlns="http://www.w3.org/1999/xhtml" />);
     expect(wrapper).toMatchSnapshot();
});