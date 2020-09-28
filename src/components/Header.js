 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
import React from 'react'; 
 import {Link,NavLink} from 'react-router-dom';
const Header = () => (
  <header>
     <h1 xmlns="http://www.w3.org/1999/xhtml" className="header_title">Paul Dowling</h1>
     {/*  <div className="sub_headings">
          <NavLink to="/" className="inactive" activeClassName="is-active" exact={true}>Home</NavLink>
          <NavLink to="/portfolio" className="inactive" activeClassName="is-active">Portfolio</NavLink>
          <NavLink to="/employment" className="inactive" activeClassName="is-active">Employment History</NavLink>
          <NavLink to="/education" className="inactive" activeClassName="is-active">Education</NavLink>
          <NavLink to="/about" className="inactive" activeClassName="is-active">About Me</NavLink>
          <NavLink to="/contact" className="inactive" activeClassName="is-active">Contact</NavLink>
     </div>*/}
     <div className="sub_headings_box_one">
          <div className='sub_headings_lines_one'>
          </div>
     </div>
  </header>
  );

 export default Header;