import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('setup default filter value', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sort by date', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
});

test('should set text filter', () => {
    const text = 'my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('my filter')
});


test('should set start date filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_STARTDATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate)
});

test('should set end date filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_ENDDATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate)
});