import React from "react";
import { connect } from 'react-redux';
import Task from '../models/Task'
import moment from 'moment';
import {
    saga_end_task,
    saga_set_fake_data
} from '../actions/saga';
import { reducer_start_task } from '../actions/reducer';
import { pink500, blueA200 } from 'material-ui/styles/colors'
import { TextField , RaisedButton , Paper, Dialog, FlatButton } from "material-ui";


const currentTimeStyle = {
    fontSize: `21px`,
    fontStyle: 'normal',
    color: blueA200,
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
        this.timerId = null;

        this.state = {
            currentSecondsCounter: 0,
            emptyTaskNameWarning: false,
            taskName: ''
        };
    }

    clockStatusToggle(){
        if (this.props.status === 1){
            this.stopRunning()
        } else {
            this.startRunning()
        }
    }

    startRunning(){

        this.props.onStartTask();

        this.setState({status: 1});
        this.startTime = moment().valueOf();

        this.startClocking();
    }

    stopRunning(){

        if ( ! this.state.taskName ){
            this.setState({emptyTaskNameWarning: true });
            return;
        }

        this.stopClocking();

        // тут мы отправляем без id
        // id и tasksCounter присвоится ему в редьюсере
        this.props.onEndTask(new Task({
                taskName: this.state.taskName,
                startTime: this.props.startTime,
                endTime: moment().valueOf()
        }));

        this.setState({
            currentSecondsCounter: 0,
            taskName: ''
        });
    }

    startClocking(){
        this.timerId = setInterval(() => {
            this.setState({ currentSecondsCounter : this.state.currentSecondsCounter + 1 });
        }, 1000);
    }

    stopClocking(){
        clearInterval(this.timerId);
    }

    handleTaskNameChange(e){
        this.setState({ taskName : e.target.value });
    }

    hideWarningDialog(){
        this.setState({ emptyTaskNameWarning: false });
    }

    showCurrentTime(){
        //https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript/19457665#19457665
        return moment().startOf('day').seconds(this.state.currentSecondsCounter).format('H:mm:ss');
    }

    componentDidMount(){
        if (this.props.status === 1){
            this.setState({
                status: 1,
                currentSecondsCounter: parseInt((moment().valueOf() - this.props.startTime)/1000, 10)
            });
            this.startClocking();
        }
    }

    componentWillUnmount (){
        this.stopClocking();
    }

    render() {

        const buttons = [
            <FlatButton label="Cancel" onClick={()=> this.hideWarningDialog()}/>
        ];

        const titleStyle = {
            color: pink500
        };

        return <section>

            <Dialog open={this.state.emptyTaskNameWarning} titleStyle={titleStyle} actions={buttons} title="Empty task name!">
                You've missed to fill the task name.
            </Dialog>

            <p className="tack_title">Name of your task</p>

            <TextField id="taskName" type="text" value={this.state.taskName} hintText="Enter the Task Name" onChange={(e)=>this.handleTaskNameChange(e)}  />

            <Paper circle={true} style={paperStyle}>
                <h1 style={currentTimeStyle}>{this.showCurrentTime()}</h1>
            </Paper>

            <RaisedButton onClick={ () => this.clockStatusToggle() }>{ this.props.status ? 'STOP' : 'START' }</RaisedButton>
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
        onStartTask: () => {
            dispatch(reducer_start_task());
        },
        onEndTask: (newTask) => {
            dispatch(saga_end_task(newTask));
        },
        onSetFakeData: () => {
            dispatch(saga_set_fake_data());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OpsComponent);