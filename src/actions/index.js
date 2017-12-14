export const START_TASK = 'START_TASK';
export const END_TASK = 'END_TASK';
export const DELETE_TASK = 'DELETE_TASK';


export const start_task = () => {
    return {
        type: START_TASK
    }
};

export const end_task = (id) => {
    return {
        type: END_TASK, id
    }
};

export const delete_task = (id) => {
    return {
        type: DELETE_TASK, id
    }
};