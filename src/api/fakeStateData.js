import moment from 'moment';
import config from '../config';
import Task from '../models/Task';


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

/*

// фейкер для дней в месяце
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
* */