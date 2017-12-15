/*

 localStorage.setItem(k.v)
 localStorage.getItem(k)
 localStorage.removeItem(k)

*/

// TODO запрашивать localStorage через redux-saga

export const localStorageKey = 'blablablatasks';

if ( ! localStorage.getItem(localStorageKey) ) {

    localStorage.setItem(localStorageKey, JSON.stringify(
        {
            status : 0,
            taskName : "Enter the Task Name",
            currTime : (new Date()).valueOf(),
            validation : {
                emptyTaskNameWarning : false
            },
            taskCounter: 4,
            tasks: [
                {
                    id: 1,
                    name_of_tasks: "name_of_task 1",
                    time_start: 1513089525028,
                    time_end: 1513090725028,
                    status: 1,
                },
                {
                    id: 2,
                    name_of_tasks:  "name_of_task 2",
                    time_start: 1513172925028,
                    time_end: 1513177125028,
                    status: 1,
                },
                {
                    id: 3,
                    name_of_tasks:  "name_of_task 3",
                    time_start: 1513259325028,
                    time_end: 1513263525028,
                    status: 1,
                },
                {
                    id: 4,
                    name_of_tasks:  "name_of_task 4",
                    time_start: 1513331325028,
                    time_end: 1513331925028,
                    status: 1,
                },
                {
                    id: 5,
                    name_of_tasks:  "name_of_task 4",
                    time_start: 1513431325028,
                    time_end: 1513431925028,
                    status: 0,
                }
            ]
        }
    ));
}

export const initialState = JSON.parse(localStorage.getItem(localStorageKey));