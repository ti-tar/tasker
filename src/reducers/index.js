import { combineReducers } from 'redux';


import MainReducer from './MainReducer';
import TableReducer from './TableReducer';

const AllReducer = combineReducers({
    MainReducer,
    TableReducer
});

export default AllReducer;