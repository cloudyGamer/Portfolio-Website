import React from 'react'; 

export class Education extends React.Component {
     onSubmit = (expense) => {
          this.props.addExpense(expense);
          this.props.history.push(`/`);   
     };
     
     render() {
     
       return (
          <div>
             <h1>Education</h1>    
         </div>
      );
     }
};
