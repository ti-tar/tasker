import React from "react";
import { connect } from 'react-redux';

import { start_task, end_task } from '../actions';

import {  pink500 } from 'material-ui/styles/colors'
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

        console.log(args);

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

    stopRunning(id = 0){
        this.setState({status:0});
        clearInterval(this.timerId);
        this.props.onEndTask(id);
    }

    startRunning(){

        if (this.state.taskName === "Enter the Task Name"  || ! this.state.taskName){
            this.setState({validation : {emptyTaskNameWarning: true }});
            return false;
        }

        this.setState({status:1});

        this.props.onStartTask();

        this.timerId = setInterval(() => {
            let today = new Date();
            let [h, m, s] = [today.getHours(), today.getMinutes(), today.getSeconds()];

            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;

            this.setState({ currTime : `${h}:${m}:${s}` });
        }, 500)


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
        onStartTask: () => {
            dispatch(start_task());
        },
        onEndTask: (id) => {
            dispatch(end_task(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);