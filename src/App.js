import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexContainer from "./containers/IndexContainer";
import InfoContainer from "./containers/InfoContainer";


/*
* Страница 1 общая
* Три компонента
*   Ops
*     название таски
*     поле ввода
*     циферблат
*     кнопки управления временем и локалсторажем
*   Table
*   Chart
*
* Страница 2 инфо
*   один контейнер
*   InfoContainer
*/

class Main extends React.Component{
    render(){
        return <main>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={IndexContainer}  />
                <Route path={process.env.PUBLIC_URL + "/info/:task_id"} component={InfoContainer}  />
            </Switch>
        </main>
    }
}

class App extends React.Component {
    render() {
        return (
            <Main />
        );
    }
}

export default App;