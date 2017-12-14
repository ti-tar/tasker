export default {
    // status 0,1 - 0 - stopped, 1 - running
    status : 0,
    taskName : "Enter the Task Name",
    currTime : "00:00:00",
    validation : {
        emptyTaskNameWarning : false
    },
    taskCounter: 4,
    tasks: [
        {
            id: 1,
            name_of_tasks: "name_of_task 1",
            time_start: 42572,
            time_end: 27245724,
            time_spend: 12312,
        },
        {
            id: 2,
            name_of_tasks:  "name_of_task 2",
            time_start: 245457,
            time_end: 45724573,
            time_spend: 1212312,
        },
        {
            id: 3,
            name_of_tasks:  "name_of_task 3",
            time_start: 6573724,
            time_end: 33423423,
            time_spend: 12312312,
        },
        {
            id: 4,
            name_of_tasks:  "name_of_task 4",
            time_start: 23423,
            time_end: 234234234,
            time_spend: 12312312,
        },
    ]
};
