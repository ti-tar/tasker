import { localStorageKey } from '../initialState';

export default (state = {}, action ) => {

    switch (action.type){
        case 'START_TASK':
            console.log('START_TASK');
            return {...state};

        case 'END_TASK':
            console.log('END_TASK');
            console.log(action.task);

            let newTaskCounter = state.taskCounter + 1;
            let newTask = {...action.task, id: newTaskCounter};

            let newState1 = {...state, taskCounter: newTaskCounter, tasks: [...state.tasks, newTask]};

            // TODO сделать через saga
            localStorage.setItem(localStorageKey, JSON.stringify(newState1));

            return newState1;

        case 'DELETE_TASK':
            let newState = {...state, tasks: state.tasks.filter(task=>task.id !== action.id)};

            // TODO сделать через saga
            localStorage.setItem(localStorageKey, JSON.stringify(newState));

            return newState;

        case 'SAGA_ACTION':
            return { ...state };

        default:
            return state;
    }

};