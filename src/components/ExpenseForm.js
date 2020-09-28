 
import React from 'react'; 
import moment from 'moment';
import  {SingleDatePicker} from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';

const now = moment();
//console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
          constructor(props) {
               super(props);
               
               this.state = {
               description: props.expense ? props.expense.description : '',
               textArea: props.expense? props.expense.textArea:'',
               amount: props.expense ? (props.expense.amount/100).toString() : '',
               createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
               calendarFocused: false,
               error: ''
               }
               
          }
        
        
          onDescriptionChange = (e) => {
              const description = e.target.value;
              this.setState(() => ({ description }));
          };
          
          onTextAreaChange = (e) => {
               const textArea = e.target.value;
               this.setState(() => ({ textArea }));
          };
          
          onAmountChange = (e) => {
               const amount = e.target.value;
               if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
                    this.setState(() => ({ amount }));
               }
          };
          
          onDateChange = (createdAt) => {
               if (createdAt) {
                    this.setState(() => ({ createdAt }));
               };
          };
          
          onFocusChange = ({ focused }) => {
               this.setState(() => ({ calendarFocused: focused }));
          };
          
          onSubmit = (e) => {
               e.preventDefault();
               if (!this.state.amount||!this.state.description) {
                    this.setState(() => ({ error: "please provide description and amount" }));
                    //set error state equal to "please provide description and amount"
               }else {
                    this.setState(() => ({ error: '' }));
                    this.props.onSubmit({
                         description:this.state.description,
                         amount: parseFloat(this.state.amount,10)*100,
                         createdAt: this.state.createdAt.valueOf(),
                         textArea: this.state.textArea
                          
                    });
               }

          }
          
        
        render() {
        
        return(<div  xmlns="http://www.w3.org/1999/xhtml">
                    {this.state.error&&<p>{this.state.error}</p>}
                  <form onSubmit={this.onSubmit}>
                    <input 
                         type="text"
                         placeholder="Description"
                         autoFocus
                         value={this.state.description}
                         onChange={this.onDescriptionChange}
                    />
                    <input
                         type="text"
                         placeholder="Amount"
                         value={this.state.amount}
                         onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                         date={this.state.createdAt}
                         onDateChange = {this.onDateChange}
                         focused={this.state.calendarFocused}
                         onFocusChange={this.onFocusChange}
                         numberOfMonths={1}
                         isOutsideRange={() => false}/>
                    <textarea
                         placeholder='Add a note for your expense (optional)'
                         value={this.state.textArea}
                         onChange={this.onTextAreaChange}
                    />
                       {this.props.expense? <button>Edit Expense</button>:<button>Add Expense</button>}
                  </form>  
               </div>);
    }  
    
}

