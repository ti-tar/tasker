import React from 'react';
import ReactDOM from 'react-dom';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
            <div>
                <MainSection />
                <TableSection />
                <ChartSection />
            </div>
        );
    }
}

export default App;