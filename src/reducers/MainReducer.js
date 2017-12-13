import { START_TASK, END_TASK } from '../actions';

const MainReducer = (state = [], action ) => {
    switch (action.type){
        case START_TASK:
            return [...state, {'descr': 'start new task'}];
        case END_TASK:
            return [...state, {'descr': 'end current task'}];
        default:
            return state;
    }
};

export default MainReducer