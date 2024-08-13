import * as React from 'react'
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Divider, Grid, MenuItem, Stack, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { useFormik } from "formik";

import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';


import { ThemeProvider } from '@mui/material/styles';
import DrButton from '../../components/DrButton'


export default function ViewPatient({ ...props }) {

    const bookFormik = useFormik({

        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            birthDate: '',
            address: '',
            sex: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination
    let patient = props.patient
    let setCurrentTarget = props.setCurrentTarget


    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    const financeCol = [
        { field: 'date', headerName: 'Date', minWidth: '150', headerAlign: 'center' },
        { field: 'teatment', headerName: 'Teatment', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'tooth', headerName: 'Tooth', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'status', headerName: 'Status', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'note', headerName: 'Note', minWidth: '120', resizable: false, headerAlign: 'center' },
        

    ];

    const paymentsCol = [
        { field: 'date', headerName: 'Date', minWidth: '180', headerAlign: 'center' },

        { field: 'amount', headerName: 'Amount', minWidth: '150', headerAlign: 'center' },

    ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modal2, setModal2] = React.useState(false);
    const openModal2 = () => setModal2(true);
    const closeeModal2 = () => setModal2(false);

    return (
        <>
          
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
                                        <Typography sx={{ display: 'inline-block' }}>Patient: &emsp; {patient.name} &nbsp; {patient.lastName}</Typography>
                                        <Divider variant='middle' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>ID: &emsp; {patient.id}</Typography>
                                        <Divider variant='middle' />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    key={''}
                                >
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Age: &emsp; {patient.age}</Typography>
                                        <Divider variant='middle' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Sex: &emsp; {patient.sex}</Typography>
                                        <Divider variant='middle' />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    key={''}
                                >
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Address: &emsp; {patient.address}</Typography>
                                        <Divider variant='middle' />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <Typography sx={{ display: 'inline-block' }}>Phone: &emsp; {patient.phone}</Typography>
                                        <Divider variant='middle' />
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                        <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <Typography component={'h2'} variant='h6' sx={{ mt: 8, bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Patient History</Typography>
                        
                        <Typography component={'h2'} variant='h6' onClick={() => setCurrentTarget("tratment")} sx={{ mt: 8, bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' ,borderRadius:"10px" }}>+ Add Tratment</Typography>
                        

                        </Box>
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