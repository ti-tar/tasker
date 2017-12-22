import reducer from '../reducers';

// expect --  https://facebook.github.io/jest/docs/en/expect.html#content

const initialState = {
    status: 0,
    taskName: '',
    tasksCounter: 0,
    // время старта новой задачи
    startTime: 0,
    tasks: [],
};

test('Reducer default case - returns 1st passed arg.', () => {
    expect(reducer(42, {})).toBe(42);
    expect(reducer(['elem1', 'elem2', 'elem3', 'elem4', 'elem5'], {})).toContain('elem3');
    expect(reducer(initialState, {})).toBeInstanceOf(Object);
    expect(reducer(initialState, {})).toHaveProperty('status', 0);
});