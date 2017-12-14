import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import helloSaga from './sagas';

import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import reducer from './reducers';
import initialState from './initialState';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    initialState,
    // applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
);

//sagaMiddleware.run(helloSaga());

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();