import React from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import {
    start_task,
    end_task,
    saga_set_fake_data,
    set_local_storage_state
} from '../actions';
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


class OpsComponent extends React.Component {

    constructor(args) {
        super(args);
        this.state = args;
        this.timerId = null;
    }

    clockStatusToggle(){
        if (this.state.status === 1){
            this.stopRunning()
        } else {
            this.startRunning()
        }
    }

    startRunning(){

        if ( ! this.state.taskName ){
            this.setState({validation : {emptyTaskNameWarning: true }});
            return false;
        }

        this.setState({
            status:1,
            startDate: (new Date()).valueOf()
        });


        this.timerId = setInterval(() => {
            this.setState({ currTime : (new Date()).valueOf() });
        }, 500)

        /*
        * values of `taskCounter` and `task.id` we'll define in reducer
        */

        let taskBoilerplate = {
            name_of_tasks: this.state.taskName,
            time_start: (new Date()).valueOf(),
            time_end: null,
            status: 0,
        };

        this.props.onStartTask(taskBoilerplate);
    }

    stopRunning(){

        this.setState({status:0});
        clearInterval(this.timerId);

        this.props.onEndTask();

    }

    handleTaskNameChange(e){
        this.setState({ taskName : e.target.value });
    }

    hideWarningDialog(){
        this.setState({ validation : { emptyTaskNameWarning: false }});
    }

    showCurrentTime(unitTime){
        return moment(unitTime).format('HH:mm:ss');
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

            <TextField id="taskName" type="text" value={this.state.taskName} hintText="Enter the Task Name" onChange={(e)=>this.handleTaskNameChange(e)}  />

            <Paper circle={true} style={paperStyle}>
                <h1 style={currentTimeStyle}>{this.showCurrentTime(this.state.currTime)}</h1>
            </Paper>

            <RaisedButton onClick={ () => this.clockStatusToggle() }>{ this.state.status ? 'STOP' : 'START' }</RaisedButton>
            <br />
            <br />
            <RaisedButton onClick={ () => this.props.onSetFakeData() }>SET FAKE DATA</RaisedButton>

        </section>;
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartTask: (task) => {
            dispatch(start_task(task), set_local_storage_state());
        },
        onEndTask: () => {
            dispatch(end_task(), set_local_storage_state());
        },
        onSetFakeData: () => {
            dispatch(saga_set_fake_data());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OpsComponent);