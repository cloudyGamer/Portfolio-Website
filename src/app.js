
import TemplateComponent from './components/TemplateComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
//import addExpense
//import filters



const jsx = (
  <div xmlns="http://www.w3.org/1999/xhtml" >
  <AppRouter />
  </div>
  );
ReactDOM.render(jsx, document.getElementById('app'));

//

