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

            console.log(newTask);


                // TODO сделать через saga
                localStorage.setItem(localStorageKey, JSON.stringify(state));


            return {...state, taskCounter: newTaskCounter, tasks: [...state.tasks, newTask]};

        case 'DELETE_TASK':
            // сохранение в локалстораж

                // TODO сделать через saga
                localStorage.setItem(localStorageKey, JSON.stringify(state));

            return {...state, tasks: state.tasks.filter(task=>task.id !== action.id)};

        case 'SAGA_ACTION':
            console.log();
            return { ...state };

        default:
            return state;
    }

};