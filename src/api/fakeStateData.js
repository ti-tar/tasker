import moment from 'moment';
import config from '../config';
import Task from '../models/Task';

moment().locale(config.locale);

export default () => {

    /*
    faker: {
     taskCompletionTime: {
         min : 20,
         max : 3*60,
     },
     // how many days
     totalWorkPeriod: 2,
     // number of performed task per day
     diligence : {
         min: 1,
         max: 8,
     }
    }
    */

    const faker = config.faker;

    const fakeTasks = {
        tasksCounter: 0,
        tasks: []
    };

    const totalTasksCount = parseInt( (Math.floor(Math.random() * faker.diligence.max) + faker.diligence.min) * faker.totalWorkPeriod, 10 );
    const totalWorkPeriodMilliseconds = parseInt(faker.totalWorkPeriod * (24*3600*1000), 10);
    const endWorkTime = moment().valueOf();
    const startWorkTime = endWorkTime - totalWorkPeriodMilliseconds;
    const maxAverageTimeForTask = totalWorkPeriodMilliseconds / totalTasksCount;

    config.debug && console.log(`totalTasksCount ${totalTasksCount}`);
    config.debug && console.log(`maxAverageTimeForTask ${maxAverageTimeForTask}`);

    for ( let i = 0; i < totalTasksCount; i++) {

        let min = startWorkTime  + (i * maxAverageTimeForTask);
        let max = min + maxAverageTimeForTask;

        let start = min + Math.random() * 0.5 * maxAverageTimeForTask;
        let end = max - Math.random() * 0.5 * maxAverageTimeForTask;

        if (config.debug){
            console.log(`day ${i+1} `);
            console.log(`--- day range: min ${min} max ${max}`);
            console.log(`--- task range: start ${start} end ${end}`);
        }

        fakeTasks.tasks.push(new Task({
            id: i + 1,
            taskName: `taskName #${i+1}`,
            startTime: parseInt(start, 10),
            endTime: parseInt(end,10),
        }));
    }
    fakeTasks.tasksCounter = fakeTasks.tasks[fakeTasks.tasks.length-1].id;
    config.debug && console.log(fakeTasks);
    return fakeTasks;
}


/*

export default () => {

    const fakeTasks = {
        tasksCounter: 0,
        tasks: []
    };

    for ( let i = 0; i < moment().format("D"); i++){

        if (Math.random() > 0.6){
            continue;
        }

        let min = moment(`${moment().format('YYYY')}-${moment().format('MM')}-${i+1}`, "YYYY-MM-DD").valueOf();
        let max = min + (43200*1000);
        let start = parseInt(Math.random() * (max - min) + min, 10);
        let end = parseInt(start + (Math.random()*(43200*1000) + (43200*1000)), 10);


        if (config.debug){
            console.log(`day ${i+1} `);
            console.log(`--- day range: min ${min} max ${max}`);
            console.log(`--- task range: start ${start} end ${end}`);
        }

        fakeTasks.tasks.push({...Task,
                id: i + 1,
                taskName: `taskName #${i+1}`,
                startTime: parseInt(start, 10),
                endTime: parseInt(end,10),
            });

    }

    fakeTasks.tasksCounter = fakeTasks.tasks[fakeTasks.tasks.length-1].id;

    config.debug && console.log(fakeTasks);

    return fakeTasks;
}

 */