
import React from 'react'; 

export class AboutMe extends React.Component {
     
     render() {
     
       return (
          <div>
             <h1>About Me</h1>    
             <ExpenseForm 
               onSubmit={this.onSubmit}
               xmlns="http://www.w3.org/1999/xhtml"
             /> 
         </div>
      );
     }
};
