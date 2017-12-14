import React from 'react';
import { connect } from 'react-redux';

import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn, RaisedButton } from "material-ui";

import { delete_task } from "../actions";


class TableContainer extends React.Component {

    taskInfo(e, id){
        console.log(`taskInfo ${id}`);
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
                        <TableHeaderColumn>Time spend</TableHeaderColumn>
                        <TableHeaderColumn>Info</TableHeaderColumn>
                        <TableHeaderColumn>Delete</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        this.props.tasks.map( (tr, index) =>
                            <TableRow key={index}>
                                <TableRowColumn>{tr.id}</TableRowColumn>
                                <TableRowColumn>{tr.name_of_tasks}</TableRowColumn>
                                <TableRowColumn>{tr.time_start}</TableRowColumn>
                                <TableRowColumn>{tr.time_end}</TableRowColumn>
                                <TableRowColumn>{tr.time_spend}</TableRowColumn>
                                <TableRowColumn>
                                    <RaisedButton onClick={ (e, td) => this.taskInfo(e, tr.id) }>INFO</RaisedButton>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <RaisedButton onClick={ () => this.props.taskDelete(tr.id) }>DELETE</RaisedButton>
                                </TableRowColumn>
                            </TableRow>
                        )
                    }
                </TableBody>

            </Table>
        </section>;
    }
}

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        taskDelete: (id) => {
            dispatch(delete_task(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);