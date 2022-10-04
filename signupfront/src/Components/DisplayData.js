import React , {useContext, useEffect, useState} from 'react';
import { TableContainer, TableHead, TableBody, TableRow, Table, TableCell , Paper} from '@material-ui/core';
import { TablePagination } from '@material-ui/core';
//import { MultiStepContext } from '../StepContext';
import axios from 'axios';
//import { response } from 'express';

export default function DisplayData() {
    //const { finalData } = useContext(MultiStepContext);

    //  code for get api data **start
    const url = 'http://localhost:4000/app/users';
    const [finaldatarows,setUser] =useState([]);

    const getUsers = () =>{
        axios.get(url)
        .then((response) =>{
            console.log(response);
            const users = response.data;
            setUser(users);
        });
    };

    useEffect(() => {
        getUsers()
    }, []);

    //  code for get api data **End

    // pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);

    const handleChangePage = (event, page) => {
        setPage(page);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(1);
    };
    // pagination

  return (
    <Paper>
        <TableContainer style={{display:'flex', justifycontent:'center'}}>
                <Table border='1' style={{width:'100%', justifycontent:'center' }} size="small" aria-label="caption table">
                    <TableHead>
                        <TableRow style={{background:'burlywood', color:'aliceblue'}}>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>District</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Landmark</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    
                            {finaldatarows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) =>(
                                <TableRow key={data.email}>
                                    {/* <TableCell>{data.firstname}</TableCell>
                                    <TableCell>{data.lastname}</TableCell>
                                    <TableCell>{data.contact}</TableCell> */}

                                    <TableCell>{data.fullName}</TableCell>
                                    <TableCell>{data.username}</TableCell>
                                    <TableCell>{data.password}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.country}</TableCell>
                                    <TableCell>{data.district}</TableCell>
                                    <TableCell>{data.city}</TableCell>
                                    <TableCell>{data.landmark}</TableCell>
                                    <TableCell>{data.address}</TableCell>  
                                </TableRow>
                             ))}
                    </TableBody>
                </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} 
                    count={finaldatarows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
        />

</Paper>
  )
}
