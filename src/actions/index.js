export const START_TASK = 'START_TASK';

export const END_TASK = 'END_TASK';

export const DELETE_TASK = 'DELETE_TASK';

export const SET_FAKE_DATA_TO_STATE = 'SET_FAKE_DATA_TO_STATE';
export const SAGA_SET_FAKE_DATA_TO_STATE = 'SAGA_SET_FAKE_DATA_TO_STATE';

export const GET_LOCAL_STORAGE_STATE = 'GET_LOCAL_STORAGE_STATE';
export const SET_LOCAL_STORAGE_STATE = 'SET_LOCAL_STORAGE_STATE';



export const start_task = (task) => {
    return {
        type: START_TASK, task
    }
};

export const end_task = () => {
    return {
        type: END_TASK
    }
};

export const delete_task = (id) => {
    return {
        type: DELETE_TASK, id
    }
};


export const set_fake_data = (fakeState) => {
    return {
        type: SET_FAKE_DATA_TO_STATE, fakeState: fakeState
    }
};


export const saga_set_fake_data = () => {
    return {
        type: SAGA_SET_FAKE_DATA_TO_STATE
    }
};


export const get_local_storage_state = () => {
    return {
        type: GET_LOCAL_STORAGE_STATE
    }
};

export const set_local_storage_state = () => {
    return {
        type: SET_LOCAL_STORAGE_STATE
    }
};