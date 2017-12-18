import config from "../config";

export default (state = {}, action ) => {

    switch (action.type){
        case 'START_TASK':
            config.debug && console.log('START_TASK');

            let newTaskCounter = state.taskCounter + 1;

            let newTask = {...action.task, id: newTaskCounter};

            let stateWithNewTask = {
                ...state,
                taskCounter: newTaskCounter,
                tasks: [...state.tasks, newTask]
            };

            config.debug && console.log(stateWithNewTask);
            return stateWithNewTask;

        case 'END_TASK':
            config.debug && console.log('END_TASK');

            let copyState = { ...state };

            copyState.tasks[copyState.tasks.length -1].status = 1;
            copyState.tasks[copyState.tasks.length -1].time_end = (new Date()).valueOf();

            config.debug && console.log(copyState);

            return copyState;


        case 'SET_FAKE_DATA_TO_STATE':
            config.debug && console.log('reducer: SET_FAKE_DATA_TO_STATE');
            return { ...state, ...action.fakeState};

        case 'DELETE_TASK':
            let newState = {...state, tasks: state.tasks.filter(task=>task.id !== action.id)};

            // TODO сделать через saga
            localStorage.setItem(config.localStorageKey, JSON.stringify(newState));

            return newState;

        case 'GET_LOCAL_STORAGE_STATE':
            config.debug && console.log(`reducer: GET_LOCALSTORAGE_STATE` );

            if (localStorage.getItem(config.localStorageKey)){
                const storageState = JSON.parse(localStorage.getItem(config.localStorageKey));
                config.debug && console.log({ ...state, ...storageState });
                return { ...state, ...storageState };
            }

            return { ...state  };

        case 'SET_LOCAL_STORAGE_STATE':
            config.debug && console.log('reducer: SET_LOCAL_STORAGE_STATE');
            localStorage.setItem(config.localStorageKey, JSON.stringify(state));
            return { ...state };

        default:
            return state;
    }
};