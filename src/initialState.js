import getByKey from './api/localStorage';
import config from "./config";

// при инициализации скрипта берем store из локалсторджа, мержим с инишиалом

const initialState = {
    status : 0,
    taskName : "",
    tasksCounter: 0,
    // время старта новой задачи
    startTime: 0,
    tasks: []
};

let localStorageState = getByKey(config.localStorageKey);
localStorageState = localStorageState ? JSON.parse(localStorageState) : {};

export default { ...initialState, ...localStorageState };