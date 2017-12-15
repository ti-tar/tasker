import React from 'react';
import { Switch, Route} from 'react-router-dom';

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

/*
 <OpsContainer />
 <TableContainer />
 <ChartComponent />
* */


/*
 <header>
 <h1>here is the header of the page</h1>
 <nav>
 <Link to="/" />
 </nav>
 </header>
* */

class Main extends React.Component{
    render(){
        return <main>
            <Switch>
                <Route exact path="/" component={IndexContainer}  />
                <Route path="/info/:task_id" component={InfoContainer}  />
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