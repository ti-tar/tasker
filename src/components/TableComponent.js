import React from 'react';
import { connect } from 'react-redux';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn, RaisedButton } from "material-ui";
import { Link } from 'react-router-dom';
import { delete_task } from "../actions";
import moment from 'moment';


class TableComponent extends React.Component {

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
                        this.props.tasks.map( (tr, index) => {
                            console.log(tr);
                            return <TableRow key={index}>
                                <TableRowColumn>{tr.id}</TableRowColumn>
                                <TableRowColumn>{tr.name_of_tasks}</TableRowColumn>
                                <TableRowColumn>{moment(tr.time_start).format('Do YYYY, HH:mm:ss')}</TableRowColumn>
                                <TableRowColumn>{moment(tr.time_end).format('Do YYYY, HH:mm:ss')}</TableRowColumn>
                                <TableRowColumn>{tr.time_spend}</TableRowColumn>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);