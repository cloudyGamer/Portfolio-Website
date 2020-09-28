import React from 'react'; 
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

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

const mapDispatchToProps = (dispatch) => ({
     addExpense: (expense) => dispatch(addExpense(expense))
});

 export default connect(undefined, mapDispatchToProps)(Education);