import React from 'react';
import { shallow } from 'enzyme';
import { Portfolio }  from '../../components/Portfolio';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;
beforeEach(() => {
      addExpense = jest.fn();
      history = { push:jest.fn() };
      wrapper= shallow(<Portfolio addExpense={addExpense} history={history} xmlns="http://www.w3.org/1999/xhtml" />);
});
test('should render Portfolio correctly',() => {
     expect(wrapper).toMatchSnapshot();
});

test('should handle addExpense correctly',() => {
     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
     expect(history.push).toHaveBeenLastCalledWith("/");
     expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});