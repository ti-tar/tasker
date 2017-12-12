import React from 'react';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';


import bro3Theme from './bro3Theme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainComponent from "./components/MainComponent";
import TableComponent from "./components/TableComponent";
import ChartComponent from "./components/ChartComponent";

/*
* действия с нашим тасклистом
*/

function tasksList(state = 0, action) {
    if (action.type === 'taskDelete') {
        return "new state obj ...";
    }
    return state;
}


/*
* сам тасклист
*
*/

let store = createStore(tasksList);

store.subscribe(() => console.log(store.getStore()));


/*
* Три компонента
*   Main
*     название таски
*     поле ввода
*     циферблат
*     кнопки управления временем и локалсторажем
*   Table
*   Chart
*/

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={bro3Theme}>
                    <main>
                        <MainComponent />
                        <TableComponent />
                        <ChartComponent />
                    </main>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;