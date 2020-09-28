 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 import {createStore,combineReducers} from 'redux';
 import expensesReducer from '../reducers/expenses';
 import filtersReducer from '../reducers/filters';
 import portfolioReducer from '../reducers/portfolio';
 export default () => {
  const store = createStore(
       combineReducers(
       {expenses: expensesReducer,
        filters: filtersReducer,
        portfolio: portfolioReducer
       }),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
     return store;
 };


