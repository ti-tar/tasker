import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui'
import InfoComponent from '../components/InfoComponent';


export default (props) => {
    return <div>
        <header>
            <nav>
                <Link to="/"><RaisedButton label='Index page' /></Link>
            </nav>
        </header>
        <section>
            <InfoComponent task_id={props.match.params.task_id} />
        </section>
    </div>;
};

