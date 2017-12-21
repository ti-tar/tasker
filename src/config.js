export default {
    localStorageKey: "blablablatasks",
    locale: 'ua',
    debug: true,
    faker: {
        taskCompletionTime: {
            min : 20,
            max : 3*60,
        },
        // how many days
        totalWorkPeriod: 2,
        // number of performed task per day
        diligence : {
            min: 3,
            max: 8,
        }
    }
};