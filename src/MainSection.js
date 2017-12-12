import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { lightBlue800 } from 'material-ui/styles/colors'
import { TextField , RaisedButton , Paper } from "material-ui";


const titleTaskStyle = {
    display: 'block',
    color: 'gray',
    margin: '1em auto',
};

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

//http://www.material-ui.com/#/components/paper
class MainSection extends React.Component {
    constructor(args) {
        super(args);

        this.state = {
            // status 0,1 - 0 - stopped, 1 - running
            status : 0,
            taskName : "Enter the Task Name",
            currTime : "00:00:00"
        };

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
    }

    startRunning(){
        this.setState({status:1});
        this.timerId = setInterval(() => {
            let today = new Date();
            let [h, m, s] = [today.getHours(), today.getMinutes(), today.getSeconds()];

            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;

            this.setState({ currTime : `${h}:${m}:${s}` });
        }, 500)
    }

    handleTaskNameChange(e){
        this.setState({taskName:e.target.value});
    }

    render() {
        return <section>
                <p className="tack_title">Name of your task</p>

                <TextField type="text" value={this.state.taskName} onChange={(e)=>this.handleTaskNameChange(e)}  />

                <Paper circle={true} style={paperStyle}>
                    <h1 style={currentTimeStyle}>{this.state.currTime}</h1>
                </Paper>

                <RaisedButton onClick={ () => this.clockStatusToggle() }>{ this.state.status ? 'STOP' : 'START' }</RaisedButton>
            </section>;
    }
}

export default MainSection;