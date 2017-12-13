import { DELETE_TASK } from "../actions";

const TableReducer = (state = [], action) => {
    switch (action.type){
        case DELETE_TASK:
            return [...state, {'descr': 'delete task'}];
        default:
            return state;
    }
};

export default TableReducer