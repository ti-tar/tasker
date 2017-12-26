export default {
    localStorageKey: "blablablatasks",
    locale: 'ua',
    debug: process.env.REACT_APP_DEBUG === 'true' ? true : false,
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