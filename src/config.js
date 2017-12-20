export default {
    localStorageKey: "blablablatasks",
    locale: 'ua',
    debug: true,
    faker: {
        taskRange: { // in minutes
            min : 20,
            max : 3*60,
        },
        // how many days
        totalTimeRange: 2,
        // number of performed task per day
        diligence : {
            min: 1,
            max: 8,
        }
    }
};