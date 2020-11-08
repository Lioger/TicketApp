import { combineReducers } from 'redux';
import ticketsReducer from './ticketsReducer';
import searchReducer from './searchReducer';

const allReducers = combineReducers({
    tickets: ticketsReducer,
    search: searchReducer,
});

export default allReducers;