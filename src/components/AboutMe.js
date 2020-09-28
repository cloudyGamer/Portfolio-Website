
import React from 'react'; 
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AboutMe extends React.Component {
     onSubmit = (expense) => {
          this.props.addExpense(expense);
          this.props.history.push(`/`);   
     };
     
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

const mapDispatchToProps = (dispatch) => ({
     addExpense: (expense) => dispatch(addExpense(expense))
});

 export default connect(undefined, mapDispatchToProps)(AboutMe);