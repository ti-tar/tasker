export const SAGA_START_TASK = 'SAGA_START_TASK';
export const SAGA_END_TASK = 'SAGA_END_TASK';
export const SAGA_DELETE_TASK = 'SAGA_DELETE_TASK';
export const SAGA_SET_FAKE_DATA_TO_STATE = 'SAGA_SET_FAKE_DATA_TO_STATE';
export const SAGA_SET_TASK_NAME = 'SAGA_SET_TASK_NAME';

export const saga_start_task = () => {
    return {
        type: SAGA_START_TASK
    }
};

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


export const saga_set_task_name = (taskName) => {
    return {
        type: SAGA_SET_TASK_NAME,
        taskName: taskName
    }
};
