import React from "react";
import { connect } from 'react-redux';
import moment from 'moment';
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

        if (this.state.taskName === "Enter the Task Name"  || ! this.state.taskName){
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
    }

    stopRunning(){

        this.setState({status:0});
        clearInterval(this.timerId);

        let finishedTask = {
            name_of_tasks: this.state.taskName,
            time_start: this.state.startDate,
            time_end: (new Date()).valueOf(),
            status: 1,
        };

        this.props.onEndTask(finishedTask);

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

            <TextField id="taskName" type="text" value={this.state.taskName} onChange={(e)=>this.handleTaskNameChange(e)}  />

            <Paper circle={true} style={paperStyle}>
                <h1 style={currentTimeStyle}>{this.showCurrentTime(this.state.currTime)}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(OpsComponent);