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
        { field: 'tooth', headerName: 'Tooth', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'teatment', headerName: 'Teatment', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'status', headerName: 'Status', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'note', headerName: 'Note', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'date', headerName: 'Date', minWidth: '150', headerAlign: 'center' },

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
                                        <Typography sx={{ display: 'inline-block' }}>Patient: &emsp; {patient.firstName} &nbsp; {patient.lastName}</Typography>
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
                        <Typography component={'h2'} variant='h6' sx={{ mt: 8, bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Patient History</Typography>
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
                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            open={open}
                            onClose={handleClose}
                        >
                            <Card fullWidth>
                                <CardHeader sx={{ bgcolor: '#2D9596', color: 'white', minWidth: 350, textAlign: 'center' }} title='Appointment Booking' />

                                <CardContent>
                                    <Box component="form" onSubmit={bookFormik.handleSubmit} >
                                        <Stack direction={'column'} spacing={2}>

                                            <Stack direction={'row'} spacing={2}>
                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center', boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Doctor</Typography>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="doctor"
                                                    name="doctor"
                                                    sx={{ width: '200px' }}
                                                    select
                                                    value={bookFormik.values.doctor}
                                                    onChange={bookFormik.handleChange}
                                                >
                                                    <MenuItem value={'Maher'}>Maher</MenuItem>
                                                    <MenuItem value={'Ali'}>Ali</MenuItem>
                                                </TextField>
                                            </Stack>


                                            <Stack direction={'row'} spacing={2}>

                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center', boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Date</Typography>
                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                    fullWidth
                                                    id="date"
                                                    name="date"
                                                    type='date'
                                                    value={bookFormik.values.date}
                                                    onChange={bookFormik.handleChange}
                                                >
                                                </TextField>
                                            </Stack>
                                            <Stack direction={'row'} spacing={2}>

                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center', boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Time</Typography>

                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                    select
                                                    fullWidth
                                                    id="time"
                                                    name="time"
                                                    type='time'
                                                    value={bookFormik.values.time}
                                                    onChange={bookFormik.handleChange}
                                                >
                                                    <MenuItem value={'10:20 am'}>10:20 am</MenuItem>
                                                    <MenuItem value={'11:30 am'}>11:00 am</MenuItem>
                                                    <MenuItem value={'14:30 pm'}>14:30 pm</MenuItem>
                                                </TextField>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ display: 'flex' }}>
                                    <DrButton size={'large'} style={{ margin: '5px', width: '30%', marginRight: '40%' }} >OK</DrButton>
                                    <DrButton size={'large'} style={{ margin: '5px', width: '30%' }} onClick={handleClose}>Cancle</DrButton>
                                </CardActions>
                            </Card>

                        </Modal>

                        <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            open={modal2}
                            onClose={closeeModal2}
                        >
                            <Card sx={{ minWidth: '500px', minHeight: '400px' }}>
                                <CardHeader sx={{ bgcolor: '#2D9596', color: 'white', minWidth: 350, textAlign: 'center' }} title='Payments' />

                                <CardContent>
                                    <ThemeProvider theme={theme}>
                                        <DataGrid

                                            paginationModel={paginationModel}
                                            onPaginationModelChange={setPaginationModel}
                                            pageSizeOptions={[PAGE_SIZE]}

                                            sx={{
                                                '& .MuiDataGrid-cell--textLeft': { textAlign: 'center' },

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
                                            columns={paymentsCol}
                                            initialState={{
                                                pagination: {
                                                    paginationModel: {
                                                        pageSize: 5,
                                                    },
                                                },
                                            }}
                                            slots={{
                                                pagination: CustomPagination,
                                            }}
                                            checkboxSelection
                                            disableRowSelectionOnClick />
                                    </ThemeProvider>
                                </CardContent>
                            </Card>
                        </Modal>
                        <DrButton size={'large'} style={{ margin: '5px' }} onClick={openModal2}>Payment</DrButton>
                        <DrButton size={'large'} style={{ margin: '5px' }} onClick={() => setCurrentTarget('pay')}>Pay</DrButton>
                        <DrButton size={'large'} style={{ margin: '5px' }} onClick={handleOpen}>Book</DrButton>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}