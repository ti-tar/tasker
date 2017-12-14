export const END_TASK = 'END_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const end_task = (task) => {
    return {
        type: END_TASK, task
    }
};

export const delete_task = (id) => {
    return {
        type: DELETE_TASK, id
    }
};