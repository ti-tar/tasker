export const SAGA_END_TASK = 'SAGA_END_TASK';
export const SAGA_DELETE_TASK = 'SAGA_DELETE_TASK';
export const SAGA_SET_FAKE_DATA_TO_STATE = 'SAGA_SET_FAKE_DATA_TO_STATE';


export const saga_end_task = (newTask) => {
    return {
        type: SAGA_END_TASK,
        newTask: newTask
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