import selectExpensesTotal from '../selectors/expenses-total.js';
import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'credit card',
        note: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
];

const total = getExpensesTotal(expenses);
console.log(total)