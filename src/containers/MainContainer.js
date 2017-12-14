import React from "react";
import { connect } from 'react-redux';

import { end_task } from '../actions';

import { pink500 } from 'material-ui/styles/colors'

import { TextField , RaisedButton , Paper, Dialog, FlatButton } from "material-ui";


const currentTimeStyle = {
    fontSize: `21px`,
    fontStyle: 'normal',
    color: '#3249c7',
    paddingTop: '115px'
};

const paperStyle = {
    display: 'block',
    height: 250,
    width: 250,
    margin: `1em auto`,
    textAlign: 'center',
    zDepth: 1
};


class MainContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = args;
        this.timerId = null
    }

    clockStatusToggle(){
        if (this.state.status === 1){
            this.stopRunning()
        } else {
            this.startRunning()
        }
    }

    stopRunning(){

        this.setState({status:0});
        clearInterval(this.timerId);

        let finishedTask = {
            name_of_tasks: this.state.taskName,
            time_start: this.dateObjectToString(this.state.startDate),
            time_end: this.dateObjectToString(new Date()),
            time_spend: ((new Date()).getTime() - this.state.startDate.getTime()) / 1000
        };

        this.props.onEndTask(finishedTask);

    }

    startRunning(){

        if (this.state.taskName === "Enter the Task Name"  || ! this.state.taskName){
            this.setState({validation : {emptyTaskNameWarning: true }});
            return false;
        }

        this.setState({
            status:1,
            startDate: new Date()
        });

        this.timerId = setInterval(() => {
            this.setState({ currTime : this.dateObjectToString(new Date()) });
        }, 500)
    }

    dateObjectToString(dateObject){
        let [h, m, s] = [dateObject.getHours(), dateObject.getMinutes(), dateObject.getSeconds()];

        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        return `${h}:${m}:${s}`;
    }

    handleTaskNameChange(e){
        this.setState({ taskName : e.target.value });
    }

    hideWarningDialog(){
        this.setState({ validation : { emptyTaskNameWarning: false }});
    }

    render() {

        const buttons = [
            <FlatButton label="Cancel" onClick={()=> this.hideWarningDialog()}/>
        ];

        const titleStyle = {
            color: pink500
        };

        return <section>

            <Dialog open={this.state.validation.emptyTaskNameWarning} titleStyle={titleStyle} actions={buttons} title="Empty task name!">
                You've missed to fill the task name.
            </Dialog>

            <p className="tack_title">Name of your task</p>

            <TextField id="taskName" type="text" value={this.state.taskName} onChange={(e)=>this.handleTaskNameChange(e)}  />

            <Paper circle={true} style={paperStyle}>
                <h1 style={currentTimeStyle}>{this.state.currTime}</h1>
            </Paper>

            <RaisedButton onClick={ () => this.clockStatusToggle() }>{ this.state.status ? 'STOP' : 'START' }</RaisedButton>

        </section>;
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEndTask: (task) => {
            dispatch(end_task(task));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);