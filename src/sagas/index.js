import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import config from '../config';
import getFakeState from '../api/fakeStateData';


import {
    reducer_start_task,
    reducer_end_task,
    reducer_set_fake_data,
    reducer_set_local_storage_state,
    reducer_delete_task,
    reducer_set_task_name
} from '../actions/reducer';

import {
    SAGA_START_TASK,
    SAGA_END_TASK,
    SAGA_DELETE_TASK,
    SAGA_SET_FAKE_DATA_TO_STATE,
    SAGA_SET_TASK_NAME
} from '../actions/saga';

function makeCall(data = {}) {
    return (new Promise((resolve) => {
        //типа асинхронность
        setTimeout(() => {
            resolve(data);
        }, 1000);

    })).then(
        (data) => {
            return data;
        });
}

function* setFakeDataToStateAndLocalStorage() {
    config.debug && console.log('setFakeDataToStateAndLocalStorage clicked');
    const fakeState = yield call(makeCall, getFakeState());
    yield put(reducer_set_fake_data(fakeState));
    yield put(reducer_set_local_storage_state());
}

function* startTask() {
    yield put(reducer_start_task());
    yield put(reducer_set_local_storage_state());
}

function* endTask(action){
    // путим редьюмеру экшн завершения таски
    yield put(reducer_end_task(action.newTask));
    // сохраняем стор с завершенной таской в лс
    yield put(reducer_set_local_storage_state());
}

function* deleteTask(action) {
    yield put(reducer_delete_task(action.id));
    yield put(reducer_set_local_storage_state());
}

function* setTaskName(action){
    yield put(reducer_set_task_name(action.taskName));
    yield put(reducer_set_local_storage_state());
}

export default function* watchLocalStorage () {
    config.debug && console.log('saga watchLocalStorage init');

    yield takeEvery(SAGA_SET_FAKE_DATA_TO_STATE, setFakeDataToStateAndLocalStorage);
    yield takeEvery(SAGA_START_TASK, startTask);
    yield takeEvery(SAGA_END_TASK, endTask);
    yield takeEvery(SAGA_DELETE_TASK, deleteTask);

    yield takeLatest(SAGA_SET_TASK_NAME, setTaskName);
}