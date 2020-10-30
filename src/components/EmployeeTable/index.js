import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function EmployeeTable(props) {
    return (
        <TableContainer>
            <Table stickyHeader aria-label="Employee Table">

                {/* Table header with titles for employees info */}
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                    </TableRow>
                </TableHead>

                {/* Table body containing employees info */}
                <TableBody>
                    {
                        props.employees.map(emp => {
                            return <TableRow hover key={emp.id}>
                                <TableCell align="center"><img alt={`${emp.firstName} ${emp.lastName}`} src={emp.image}></img></TableCell>
                                <TableCell align="center">{emp.firstName}</TableCell>
                                <TableCell align="center">{emp.lastName}</TableCell>
                                <TableCell align="center">{emp.email}</TableCell>
                                <TableCell align="center">{emp.phone}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeeTable;