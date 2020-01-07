import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should remove expense action object', () => {
    const action = removeExpense({id: '123321'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123321'
    })
})

test('should edit expense action object', () => {
    const action = editExpense('123321',{description: 'DESC'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123321',
        updates: {description: 'DESC'}
    })
})

test('should edit expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 3240,
        createdAt: 10000,
        note:'my note'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('should edit expense action object with default values', () => {
    const action = addExpense();
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note:''
    }
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
