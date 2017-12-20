import { call, put, takeEvery } from 'redux-saga/effects';
import config from '../config';
import getByKey from '../api/localStorage';
import getFakeState from '../api/fakeStateData';

import {
    reducer_end_task,
    reducer_get_local_storage_state,
    reducer_set_fake_data,
    reducer_set_local_storage_state,
    reducer_delete_task
} from '../actions/reducer';

import {
    SAGA_END_TASK,
    SAGA_DELETE_TASK,
    SAGA_SET_FAKE_DATA_TO_STATE
} from '../actions/saga';



function getInitData(key) {

    return (new Promise((resolve) => {
        //типа асинхронность
        setTimeout(() => {
            resolve(getByKey(key))
        }, 500);

    })).then(
        (data) => {
            return data;
        });
}

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

function* end_task(action){
    // путим редьюмеру экшн завершения таски
    yield put(reducer_end_task(action.newTask));
    // сохраняем стор с завершенной таской в лс
    yield put(reducer_set_local_storage_state());
}

function* delete_task(action) {
    yield put(reducer_delete_task(action.id));
    yield put(reducer_set_local_storage_state());
}

export default function* watchLocalStorage () {
    config.debug && console.log('saga watchLocalStorage init');

    // при инициализации скрипта берем store из локалсторджа, если он там есть ...
    let localStorageState = yield call(getInitData, config.localStorageKey);
    localStorageState = localStorageState ? JSON.parse(localStorageState) : {};
    // .. и мерждим к initialState
    yield put(reducer_get_local_storage_state(localStorageState));



    yield takeEvery(SAGA_SET_FAKE_DATA_TO_STATE, setFakeDataToStateAndLocalStorage);
    yield takeEvery(SAGA_END_TASK, end_task);
    yield takeEvery(SAGA_DELETE_TASK, delete_task);
}