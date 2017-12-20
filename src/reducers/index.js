import config from "../config";
import {
    REDUCER_END_TASK,
    REDUCER_DELETE_TASK,
    REDUCER_GET_LOCAL_STORAGE_STATE,
    REDUCER_SET_LOCAL_STORAGE_STATE,
    REDUCER_SET_FAKE_DATA_TO_STATE } from '../actions/reducer';

export default (state = {}, action ) => {

    switch (action.type){

        case REDUCER_END_TASK:
            config.debug && console.log(`reducer: ${action.type}`);

            let newTasksCounter = state.tasksCounter + 1;

            let stateWithNewTask = {
                ...state,
                tasksCounter: newTasksCounter,
                tasks: [...state.tasks, {...action.newTask, id: newTasksCounter}]
            };

            return stateWithNewTask;


        case REDUCER_DELETE_TASK:
            config.debug && console.log(`reducer: ${action.type}`);
            return {...state, tasks: state.tasks.filter(task=>task.id !== action.id)};


        case REDUCER_GET_LOCAL_STORAGE_STATE:
            config.debug && console.log(`reducer: ${action.type}`);

            if (localStorage.getItem(config.localStorageKey)){
                const storageState = JSON.parse(localStorage.getItem(config.localStorageKey));
                config.debug && console.log({ ...state, ...storageState });
                return { ...state, ...storageState };
            }

            return { ...state  };

        case REDUCER_SET_LOCAL_STORAGE_STATE:
            config.debug && console.log(`reducer: ${action.type}`);
            localStorage.setItem(config.localStorageKey, JSON.stringify(state));
            return { ...state };

        case REDUCER_SET_FAKE_DATA_TO_STATE:
            config.debug && console.log(`reducer: ${action.type}`);
            return { ...state, ...action.fakeState};

        default:
            return state;
    }
};