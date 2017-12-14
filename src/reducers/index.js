export default (state = [], action ) => {

    switch (action.type){
        case 'START_TASK':
            console.log('START_TASK');
            let newTask = {
                id: 5,
                name_of_tasks:  "name_of_tasks 5",
                time_start: 555555,
                time_end: 6666,
                time_spend: 777777
            };
            state.tasks.push(newTask);
            let newObj = {...state, tasks: state.tasks};
            console.log(newObj);
            return newObj;

        case 'END_TASK':
            console.log('END_TASK');
            return {...state, tasks: state.tasks};

        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter(task=>task.id !== action.id)};

        default:
            return state;
    }

};