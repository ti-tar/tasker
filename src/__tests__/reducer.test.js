import reducer from '../reducers';

import {
    REDUCER_START_TASK,
    REDUCER_END_TASK,
    REDUCER_DELETE_TASK,
    REDUCER_SET_FAKE_DATA_TO_STATE,
    REDUCER_SET_TASK_NAME
} from '../actions/reducer';


const initialState = {
    status: 0,
    taskName: '',
    tasksCounter: 0,
    startTime: 0,
    tasks: [],
};

describe('Reducer tests:', () => {

    it('REDUCER_START_TASK', () => {

        const action = {
            type: REDUCER_START_TASK
        };
        expect(reducer(initialState, action)).toHaveProperty('status', 1);
    });


    it('REDUCER_END_TASK', () => {
        const action = {
            type: REDUCER_END_TASK,
            newTask: {someVar: 'value'}
        };

        expect(reducer(initialState, action)).toEqual({
            status: 0,
            taskName: "",
            tasksCounter: 1,
            startTime: 0,
            tasks: [{ id: 1, taskName: '', someVar: 'value'}]
        });
    });

    it('REDUCER_DELETE_TASK', () => {

        const newInitialState = { ...initialState, tasks: [
                {id: 1, value: 'someValue1'},
                {id: 2, value: 'someValue2'},
                {id: 3, value: 'someValue3'},
                {id: 4, value: 'someValue4'}
            ]};

        const action = {
            type: REDUCER_DELETE_TASK,
            id: 3
        };

        expect(reducer(newInitialState, action)).toEqual({ ...initialState, tasks: [
                {id: 1, value: 'someValue1'},
                {id: 2, value: 'someValue2'},
                {id: 4, value: 'someValue4'}
            ]});
    });

    it('REDUCER_SET_FAKE_DATA_TO_STATE', () => {
        const action = {
            type: REDUCER_SET_FAKE_DATA_TO_STATE,
            fakeState: {
                status: 1
            }
        };
        expect(reducer(initialState, action)).toEqual({...initialState, status: 1});
    });

    it('REDUCER_SET_TASK_NAME', () => {
        const action = {
            type: REDUCER_SET_TASK_NAME,
            taskName: 'newTestTaskName'
        };
        expect(reducer(initialState, action)).toEqual({...initialState, taskName: 'newTestTaskName'});
    });

    it('REDUCER_UNDEFINED_ACTION', () => {
        const action = {
            type: "UNDEFINED_ACTION",
            taskName: 'UNDEFINED_ACTION_NAME'
        };

        expect(reducer(initialState, action)).toEqual(initialState);
    });

});