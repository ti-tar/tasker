export const SAGA_START_TASK = 'SAGA_START_TASK';
export const SAGA_END_TASK = 'SAGA_END_TASK';
export const SAGA_DELETE_TASK = 'SAGA_DELETE_TASK';
export const SAGA_SET_FAKE_DATA_TO_STATE = 'SAGA_SET_FAKE_DATA_TO_STATE';


export const saga_start_task = (task) => {
    return {
        type: SAGA_START_TASK,
        newTask: task
    }
};

export const saga_end_task = () => {
    return {
        type: SAGA_END_TASK
    }
};

export const saga_delete_task = (id) => {
    return {
        type: SAGA_DELETE_TASK,
        id: id
    }
};

export const saga_set_fake_data = () => {
    return {
        type: SAGA_SET_FAKE_DATA_TO_STATE
    }
};