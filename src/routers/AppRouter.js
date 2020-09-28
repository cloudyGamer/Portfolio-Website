 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
 import HomePage from '../components/HomePage';
 import Portfolio from '../components/Portfolio';
import Employment from '../components/Employment';
// import EditExpensePage from '../components/EditExpensePage';
 import Education from '../components/Education';
 import AboutMe from '../components/AboutMe';
 import Contact from '../components/Contact';
 import NotFoundPage from '../components/NotFoundPage';
 import Header from '../components/Header';
const AppRouter = () => (
  <BrowserRouter xmlns="http://www.w3.org/1999/xhtml">
     <div>
     <Header />
     <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/portfolio" component={Portfolio}/>
           <Route path="/employment" component={Employment}/>
           <Route path="/education" component={Education}/>
           <Route path="/about" component={AboutMe}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFoundPage} />
     </Switch>
     </div>
  </BrowserRouter>
  );






 export default AppRouter;