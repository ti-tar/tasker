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

            return {...state, taskCounter: newTaskCounter, tasks: [...state.tasks, newTask]};

        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter(task=>task.id !== action.id)};

        default:
            return state;
    }

};