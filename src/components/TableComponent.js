import React from 'react';
import { connect } from 'react-redux';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn, RaisedButton } from "material-ui";
import { Link } from 'react-router-dom';
import { saga_delete_task } from "../actions/saga";

import { lightBlue50 } from 'material-ui/styles/colors';

import moment from 'moment';


class TableComponent extends React.Component {
    constructor(...args){
        super(...args);
        console.log(this);
    }

    render() {
        return <section>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>№</TableHeaderColumn>
                        <TableHeaderColumn>Name of tasks</TableHeaderColumn>
                        <TableHeaderColumn>Time start</TableHeaderColumn>
                        <TableHeaderColumn>Time end</TableHeaderColumn>
                        <TableHeaderColumn>Spent time, <br/>hours </TableHeaderColumn>
                        <TableHeaderColumn>Info</TableHeaderColumn>
                        <TableHeaderColumn>Delete</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        this.props.tasks.map( (tr, index) => {
                            return <TableRow key={index} style={{ backgroundColor: lightBlue50 }}>
                                <TableRowColumn>{tr.id}</TableRowColumn>
                                <TableRowColumn>{tr.taskName}</TableRowColumn>
                                <TableRowColumn>
                                    {moment(tr.startTime).format('Do YYYY,')}
                                    <br/>
                                    {moment(tr.startTime).format('HH:mm:ss')}
                                </TableRowColumn>
                                <TableRowColumn>
                                    { tr.endTime ? moment(tr.endTime).format('Do YYYY,') : ""}
                                    <br/>
                                    { tr.endTime ? moment(tr.endTime).format('HH:mm:ss') : ""}
                                </TableRowColumn>
                                <TableRowColumn>{ tr.endTime ? parseInt((tr.endTime - tr.startTime) / 3600000, 10)  : ""}</TableRowColumn>
                                <TableRowColumn>
                                    <Link to={{ pathname: '/info/' + tr.id }}><RaisedButton>INFO</RaisedButton></Link>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <RaisedButton onClick={ () => this.props.taskDelete(tr.id) }>DELETE</RaisedButton>
                                </TableRowColumn>
                            </TableRow>}
                        )
                    }
                </TableBody>

            </Table>
        </section>;
    }
}

const mapStateToProps = s => {
    return {
        tasks: s.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        taskDelete: (id) => {
            dispatch(saga_delete_task(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);