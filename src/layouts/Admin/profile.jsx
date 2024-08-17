import * as React from 'react'
import { Link } from 'react-router-dom';

import { Avatar, Box, Divider, Grid, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';


import { ThemeProvider } from '@mui/material/styles';
import DrButton from '../../components/DrButton'


export default function Profile({ ...props }) {
    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination

    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    const financeCol = [
        { field: 'date', headerName: 'Booking Date', minWidth: '150', headerAlign: 'center' },
        { field: 'amount', headerName: 'Amount', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'note', headerName: 'Note', minWidth: '120', resizable: false, headerAlign: 'center' },

    ];
    let date = new Date()
    const financeRows = [
        {
            id: '1',
            date: '2024-03-15',
            amount: '300,000',
            note: 'Regular Salary'
        },
        {
            id: '2',
            date: '2024-03-01',
            amount: '50,000',
            note: 'Performance Bonus'
        },
        {
            id: '3',
            date: '2024-02-15',
            amount: '300,000',
            note: 'Regular Salary'
        },
        {
            id: '4',
            date: '2024-01-15',
            amount: '300,000',
            note: 'Regular Salary'
        },
        {
            id: '5',
            date: '2023-12-15',
            amount: '300,000',
            note: 'Regular Salary'
        },
    ];

    const profileData = {
        name: 'John Smith',
        email: 'john.smith@example.com',
        address: '123 Main St, Anytown, USA',
        salary: '$300,000 per year',
        phone: '+1 (555) 123-4567',
        sex: 'Male'
    };

    return (
        <>
            <Link to={'/forgot'} state={{ job: 'recep' }} style={{ display: 'flex', justifyContent: 'end', textDecoration: 'none' }}>
                <DrButton>Change Password</DrButton>
            </Link>
            <Grid container>
                <Grid item xs={false} sm={2} md={2}>
                    <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '150px' }, height: { xs: '0', sm: '0', lg: '150px' }, mt: 10, mr: 3 }} />
                </Grid>
                <Grid item xs={12} sm={10} md={10}>
                    <Box fullwidth sx={{ mt: 5, }}>
                        <Typography component={'h2'} variant='h6' sx={{ bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Information</Typography>
                        <Divider sx={{ borderWidth: '1px', borderColor: 'black' }}></Divider>

                        <Table sx={{ minWidth: 650 }} >
                            <TableBody >
                                <TableRow
                                    key={'name-email'}
                                >
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Name: {profileData.name}</Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Email: {profileData.email}</Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    key={'address-salary'}
                                >
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Address: {profileData.address}</Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Salary: {profileData.salary}</Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    key={'phone-sex'}
                                >
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Phone: {profileData.phone}</Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Sex: {profileData.sex}</Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>


                    </Box>
                </Grid>
            </Grid>
        </>
    )
}