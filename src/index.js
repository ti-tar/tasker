import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import watchLocalStorage from './sagas';
import reducer from './reducers';
import { logger } from 'redux-logger';
import moment from 'moment';

import './index.css';
import App from './App';
import initialState from './initialState';
import bro3Theme from './bro3Theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import config from './config';

// https://github.com/evgenyrodionov/redux-logger#recipes
const middlewares = [];
if (config.debug && process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

moment().locale(config.locale);

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

let store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares),
    window.devToolsExtension && window.devToolsExtension(),
);

sagaMiddleware.run(watchLocalStorage);

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