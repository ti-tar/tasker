import fakeTasks from '../api/fakeStateData';

describe('Faker tests', () => {
    it('Faker basic test.', () => {
        const newFakeTasks = fakeTasks();

        expect(newFakeTasks.tasksCounter).toBeGreaterThan(0);
        expect(newFakeTasks.tasks.length).toBeGreaterThan(0);
        expect(newFakeTasks.tasksCounter === newFakeTasks.tasks.length).toBeTruthy();
    });

    it('Two fakeDataSet comparison', () => {
        const newFakeTasks1 = fakeTasks();
        const newFakeTasks2 = fakeTasks();

        expect(newFakeTasks1).not.toEqual(newFakeTasks2);
    });
});