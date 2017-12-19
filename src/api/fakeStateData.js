import moment from 'moment';
import config from '../config'


const fakeTasks = {
    taskCounter: 0,
    tasks: []
};

for ( let i = 0; i < moment().format("D"); i++){

    if (Math.random() > 0.6){
        continue;
    }

    let min = moment(`${moment().format('YYYY')}-${moment().format('M')}-${i+1}`, "YYYY-DD-MM").valueOf();
    let max = min + (43200*1000);
    let start = Math.random() * (max - min) + min;
    let end = start + (Math.random()*(43200*1000) + (43200*1000));

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

export default fakeTasks;