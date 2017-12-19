import moment from 'moment';
import config from '../config'


export default () => {

    const fakeTasks = {
        taskCounter: 0,
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

        fakeTasks.tasks.push(
            {
                id: i + 1,
                name_of_tasks: `name of task ${i+1}`,
                time_start: parseInt(start, 10),
                time_end: parseInt(end,10),
                status: 1,
            });

    }

    fakeTasks.taskCounter = fakeTasks.tasks.length;

    config.debug && console.log(fakeTasks);

    return fakeTasks;
}