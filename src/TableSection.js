import React from 'react';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn, RaisedButton } from "material-ui";

const rows = [{
    id: 1,
    name_of_tasks: "name_of_tasks 1",
    time_start: 42572,
    time_end: 27245724,
    time_spend: 4,
    info: "",
    delete: ""
}, {
    id: 2,
    name_of_tasks:  "name_of_tasks 2",
    time_start: 245457,
    time_end: 45724573,
    time_spend: 4,
    info: "",
    delete: ""
}, {
    id: 3,
    name_of_tasks:  "name_of_tasks 3",
    time_start: 6573724,
    time_end: 33423423,
    time_spend: 4,
    info: "",
    delete: ""
}, {
    id: 4,
    name_of_tasks:  "name_of_tasks 4",
    time_start: 2,
    time_end: 3,
    time_spend: 4,
    info: "",
    delete: ""
}];

function ButtonClickHandler(){
    console.log('Button Click Handler');
}

// http://www.material-ui.com/#/components/raised-button
const GenTableRows = ({rows}) => {
        return rows.map( (tr, index) =>
            <TableRow key={index}>
                <TableRowColumn>{tr.id}</TableRowColumn>
                <TableRowColumn>{tr.name_of_tasks}</TableRowColumn>
                <TableRowColumn>{tr.time_start}</TableRowColumn>
                <TableRowColumn>{tr.time_end}</TableRowColumn>
                <TableRowColumn>{tr.time_spend}</TableRowColumn>
                <TableRowColumn>
                    <RaisedButton onClick={ButtonClickHandler}>INFO</RaisedButton>
                </TableRowColumn>
                <TableRowColumn>
                    <RaisedButton onClick={ButtonClickHandler}>DELETE</RaisedButton>
                </TableRowColumn>
            </TableRow>
        );
    };


function TableSection() {

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
                    <GenTableRows rows={rows} />
                </TableBody>

            </Table>
    </section>
}

export default TableSection;