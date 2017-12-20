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
    constructor(...args){
        super(...args);
        console.log(process);
        try {
            this.uriIndex = process.env.PUBLIC_URL;
        } catch (err) {
            this.uriIndex = '/'
        }
    }
    render(){
        return <main>
            <Switch>
                <Route exact path={this.uriIndex + '/'} component={IndexContainer}  />
                <Route path={this.uriIndex + "/info/:task_id"} component={InfoContainer}  />
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