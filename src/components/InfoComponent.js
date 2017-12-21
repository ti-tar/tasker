import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


class InfoComponent extends React.Component {

    render(){
        const { task } = this.props;
        if (task)
            return <div>
            <h1>info component</h1>
            <ul>
                <li><b>id:</b> { task.id }</li>
                <li><b>taskName:</b> { task.taskName }</li>
                <li><b>startTime:</b> { moment(task.startTime).format('Do MM YYYY, HH:mm:ss') } </li>
                <li><b>endTime:</b> { moment(task.endTime).format('Do MM YYYY, HH:mm:ss') }   </li>
            </ul>
        </div>;

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