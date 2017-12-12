import React from 'react';

import bro3Theme from './bro3Theme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainSection from "./MainSection";
import TableSection from "./TableSection";
import ChartSection from "./ChartSection";


/*
* Три section
*   MainSection
*     название таски
*     поле ввода
*     циферблат
*     кнопки управления временем и локалсторажем
*   TableSection
*   ChartSection
*/


class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={bro3Theme}>
                <MainSection />
                <TableSection />
                <ChartSection />
            </MuiThemeProvider>
        );
    }
}

export default App;