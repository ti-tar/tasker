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



class TaskNameInput extends React.Component {
    constructor (props){
        super(props);

        this.state = {value: "Enter the Task Name"};

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value:e.target.value});
    }

    render() {
        return (
            <TextField type="text" value={this.state.value} onChange={this.handleChange}  />
        )
    }
}

function getCurrentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = m < 10 ? "0" + m : m;
    var s = today.getSeconds();
    s = s < 10 ? "0" + s : s;

    return h + ":" + m + ":" + s;
}

const FormattedTime = () => (<h1 style={currentTimeStyle}>{getCurrentTime()}</h1>);

function ButtonClickHandler(){
    console.log('Button Click Handler');
}

//http://www.material-ui.com/#/components/paper
const MainSection = () => (
    <section>
        <p className="tack_title">Name of your task</p>

        <MuiThemeProvider>
            <TaskNameInput />
            <Paper circle={true} style={paperStyle} children={<FormattedTime />}></Paper>
            <RaisedButton className="btn" onClick={ButtonClickHandler}>STOP</RaisedButton>
        </MuiThemeProvider>
    </section>
);


export default MainSection;