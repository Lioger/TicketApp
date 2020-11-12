import { combineReducers } from 'redux';
import ticketsReducer from './ticketsReducer';
import searchReducer from './searchReducer';
import addButtonReducer from './addButtonReducer';

const allReducers = combineReducers({
    tickets: ticketsReducer,
    search: searchReducer,
    addButton: addButtonReducer,
});

export default allReducers;