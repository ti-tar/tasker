import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


class InfoComponent extends React.Component {

    constructor(args){
        super(args);

        this.task_id = parseInt(this.props.task_id, 10);
    }


    render(){

        if (this.props.task)
            return <div>
            <h1>info component</h1>
            <ul>
                <li><b>id:</b> { this.props.task.id }</li>
                <li><b>taskName:</b> { this.props.task.taskName }</li>
                <li><b>startTime:</b> { moment(this.props.task.startTime).format('Do YYYY, HH:mm:ss') } </li>
                <li><b>endTime:</b> { moment(this.props.task.endTime).format('Do YYYY, HH:mm:ss') }   </li>
            </ul>
        </div>;
        else
            return <h1>there is no such task you are looking for or it has been deleted</h1>;
    }

}

const mapStateToProps = (state, ownProps) => {
    let currentTask = state.tasks.filter(t => t.id === parseInt(ownProps.task_id, 10));
    return {
        task: currentTask.length ? currentTask[0] : null
    }
};

export default connect(mapStateToProps)(InfoComponent);