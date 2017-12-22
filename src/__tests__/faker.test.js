import fakeTasks from '../api/fakeStateData';

describe('sopm,ething', () => {
    it('Faker basic test.', () => {
        expect(fakeTasks().tasksCounter).toBeGreaterThan(0);
        expect(fakeTasks().tasks.length).toBeGreaterThan(0);
    });
});