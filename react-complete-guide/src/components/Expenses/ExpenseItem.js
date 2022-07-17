import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <h2>{props.title}</h2>
        <div className='expoense-item__description'>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
    );
}

export default ExpenseItem;