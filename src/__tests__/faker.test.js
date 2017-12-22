import fakeTasks from '../api/fakeStateData';

test('Faker basic test.', () => {
    expect(fakeTasks().tasksCounter).toBeGreaterThan(0);
    expect(fakeTasks().tasks.length).toBeGreaterThan(0);
});