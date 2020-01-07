import moment from 'moment';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_STARTDATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_ENDDATE',
        endDate: moment(0)
    })
});

test('should generate set text filter action object with provided value', () => {
    const action = setTextFilter('abc');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'abc'
    })
});

test('should generate set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});