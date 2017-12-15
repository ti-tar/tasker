import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { put } from 'redux-saga/effects'
import helloSaga from './sagas';


import './index.css';
import App from './App';

import reducer from './reducers';
import { initialState } from './initialState';

import bro3Theme from './bro3Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
);

sagaMiddleware.run(helloSaga);



render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={bro3Theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root')
);


registerServiceWorker();