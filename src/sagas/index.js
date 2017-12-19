import { call, put, takeEvery } from 'redux-saga/effects';
import getFakeState from '../api/fakeStateData';
import config from '../config';

import {
    reducer_start_task,
    reducer_end_task,
    reducer_get_local_storage_state,
    reducer_set_fake_data,
    reducer_set_local_storage_state,
    reducer_delete_task
} from '../actions/reducer';

import {
    SAGA_START_TASK,
    SAGA_END_TASK,
    SAGA_DELETE_TASK,
    SAGA_SET_FAKE_DATA_TO_STATE
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

function* start_task(action){
    // отправлем редьюсеру акшн обновления стора
    yield put(reducer_start_task(action.newTask));
    // сохраняем наш изменненный стор  в лс
    yield put(reducer_set_local_storage_state());
}

function* end_task(){
    // путим редьюмеру экшн завершения таски
    yield put(reducer_end_task());
    // сохраняем стор с завершенной таской в лс
    yield put(reducer_set_local_storage_state());
}

function* delete_task(action) {
    yield put(reducer_delete_task(action.id));
    yield put(reducer_set_local_storage_state());
}
export default function* watchLocalStorage () {
    config.debug && console.log('saga watchLocalStorage init');

    // при инициализации скрипта пустой store меняем на store из локалсторджа, если он там есть
    yield put(reducer_get_local_storage_state());

    yield takeEvery(SAGA_SET_FAKE_DATA_TO_STATE, setFakeDataToStateAndLocalStorage);
    yield takeEvery(SAGA_START_TASK, start_task);
    yield takeEvery(SAGA_END_TASK, end_task);
    yield takeEvery(SAGA_DELETE_TASK, delete_task);
}