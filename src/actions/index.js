export const START_TASK = 'START_TASK';
export const END_TASK = 'END_TASK';
export const DELETE_TASK = 'DELETE_TASK';


export const start_task = () => {
    return {
        type: START_TASK
    }
};

export const end_task = () => {
    return {
        type: END_TASK
    }
};

export const delete_task = () => {
    return {
        type: DELETE_TASK
    }
};