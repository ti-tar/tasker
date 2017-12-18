import { call, put, takeEvery } from 'redux-saga/effects';
import fakeStateData from '../api/fakeStateData';
import config from '../config';

import {get_local_storage_state, set_fake_data, set_local_storage_state} from '../actions';

import { SAGA_SET_FAKE_DATA_TO_STATE } from '../actions';

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


export function* getLocalStorageData () {
    config.debug && console.log('getLocalStorageData called');
    const data = yield call(makeCall);
    config.debug && console.log(data);
}

export function* setLocalStorageData () {
    yield put(set_local_storage_state());
}


export function* setFakeDataToStateAndLocalStorage() {
    config.debug && console.log('setFakeDataToStateAndLocalStorage clicked');
    const fakeState = yield call(makeCall, fakeStateData);
    yield put(set_fake_data(fakeState));
    yield put(set_local_storage_state());
}

export default function* watchLocalStorage () {
    config.debug && console.log('saga watchLocalStorage init');

    // при инициализации скрипта пустой store меняем на store из локалсторджа, если он там есть
    yield put(get_local_storage_state());

    yield takeEvery(SAGA_SET_FAKE_DATA_TO_STATE, setFakeDataToStateAndLocalStorage);
}