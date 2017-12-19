import config from "../config";
import {
    REDUCER_START_TASK,
    REDUCER_END_TASK,
    REDUCER_DELETE_TASK,
    REDUCER_GET_LOCAL_STORAGE_STATE,
    REDUCER_SET_LOCAL_STORAGE_STATE,
    REDUCER_SET_FAKE_DATA_TO_STATE } from '../actions/reducer';

export default (state = {}, action ) => {

    switch (action.type){
        case REDUCER_START_TASK:
            config.debug && console.log(`reducer: ${action.type}`);

            let newTaskCounter = state.taskCounter + 1;

            let newTask = {...action.task, id: newTaskCounter};

            let stateWithNewTask = {
                ...state,
                taskCounter: newTaskCounter,
                tasks: [...state.tasks, newTask]
            };

            config.debug && console.log(stateWithNewTask);
            return stateWithNewTask;


        case REDUCER_END_TASK:
            config.debug && console.log(`reducer: ${action.type}`);

            let copyState = { ...state };

            copyState.tasks[copyState.tasks.length -1].status = 1;
            copyState.tasks[copyState.tasks.length -1].time_end = (new Date()).valueOf();

            config.debug && console.log(copyState);

            return copyState;


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