import React from 'react';
import { connect } from 'react-redux';



class InfoComponent extends React.Component {

    constructor(args){
        super(args);
        console.log(this);
        this.task_id = parseInt(this.props.task_id)
    }


    render(){

        if (this.props.task)
            return <div>
            <h1>info component</h1>
            <ul>
                <li><b>id:</b> {this.props.task.id}</li>
                <li><b>name_of_tasks:</b> {this.props.task.name_of_tasks}</li>
                <li><b>time_start:</b> {this.props.task.time_start}</li>
                <li><b>time_end:</b> {this.props.task.time_end}</li>
            </ul>
        </div>;
        else
            return <h1>there is no such task you are looking for or it has been deleted</h1>;
    }

}

const mapStateToProps = (state, ownProps) => {
    let currentTask = state.tasks.filter(t => t.id === parseInt(ownProps.task_id));
    return {
        task: currentTask.length ? currentTask[0] : null
    }
};

export default connect(mapStateToProps)(InfoComponent);