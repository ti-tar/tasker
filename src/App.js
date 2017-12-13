import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import bro3Theme from './bro3Theme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainContainer from "./containers/MainContainer";
import TableContainer from "./containers/TableContainer";
import ChartComponent from "./components/ChartComponent";

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
                        <MainContainer />
                        <TableContainer />
                        <ChartComponent />
                    </main>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;