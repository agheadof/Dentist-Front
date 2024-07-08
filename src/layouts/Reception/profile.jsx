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
            date: date.toISOString().split('T')[0],
            amount: '300,000',
            note: 'Regular'

        },]

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
                                    key={''}
                                >
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Name: </Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Email: </Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    key={''}
                                >
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Address: </Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Salary: </Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    key={''}
                                >
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Phone: </Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Sex: </Typography>
                                        <Divider variant='inset' />
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                        <Typography component={'h2'} variant='h6' sx={{ mt: 8, bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Financial</Typography>
                        <Divider sx={{ borderWidth: '1px', borderColor: 'black' }}></Divider>
                        <ThemeProvider theme={theme}>
                            <DataGrid

                                paginationModel={paginationModel}
                                onPaginationModelChange={setPaginationModel}
                                pageSizeOptions={[PAGE_SIZE]}

                                sx={{
                                    '& .MuiDataGrid-cell--textLeft': { textAlign: 'center' },
                                    '& .MuiDataGrid-toolbarContainer': {
                                        '& .MuiButton-text': {
                                            fontSize: '16px !important',
                                            color: '#074682',
                                        },
                                        '& .MuiBadge-badge': {
                                            backgroundColor: '#074682',
                                        },
                                    },
                                    [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
                                        outline: 'none',
                                    },
                                    [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
                                    {
                                        outline: 'none',
                                    },
                                    [`& .${gridClasses.columnHeader}`]:
                                    {
                                        color: 'white',
                                    },
                                }}
                                disableColumnMenu
                                rows={financeRows}
                                columns={financeCol}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                slots={{
                                    toolbar: customToolbar,
                                    pagination: CustomPagination,
                                }}
                                checkboxSelection
                                disableRowSelectionOnClick />
                        </ThemeProvider>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}