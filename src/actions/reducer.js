export const REDUCER_START_TASK = 'REDUX_START_TASK';
export const REDUCER_END_TASK = 'REDUX_END_TASK';
export const REDUCER_DELETE_TASK = 'REDUCER_DELETE_TASK';
export const REDUCER_SET_FAKE_DATA_TO_STATE = 'SET_FAKE_DATA_TO_STATE';
export const REDUCER_SET_TASK_NAME = 'REDUCER_SET_TASK_NAME';

export const REDUCER_SET_LOCAL_STORAGE_STATE = 'REDUCER_SET_LOCAL_STORAGE_STATE';


export const reducer_start_task = (newTask) => {
    return {
        type: REDUCER_START_TASK
    }
};

export const reducer_end_task = (newTask) => {
    return {
        type: REDUCER_END_TASK,
        newTask: newTask
    }
};

export const reducer_delete_task = (id) => {
    return {
        type: REDUCER_DELETE_TASK,
        id: id
    }
};

export const reducer_set_fake_data = (fakeState) => {
    return {
        type: REDUCER_SET_FAKE_DATA_TO_STATE, fakeState: fakeState
    }
};


export const reducer_set_task_name = (taskName) => {
    return {
        type: REDUCER_SET_TASK_NAME, taskName: taskName
    }
};

export const reducer_set_local_storage_state = () => {
    return {
        type: REDUCER_SET_LOCAL_STORAGE_STATE
    }
};