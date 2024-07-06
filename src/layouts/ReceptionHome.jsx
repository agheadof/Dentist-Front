import * as React from 'react';
import HomePageLayout from '../components/HomePageLayout'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Avatar, Box, Divider, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
    DataGrid,
    gridClasses,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useFormik } from "formik";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import DrButton from '../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';

export default function ReceptionHome() {

    const formik = useFormik({

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

    const theme = createTheme({
        mixins: {
            MuiDataGrid: {
                // Pinned columns sections
                pinnedBackground: '#2D9596',
                // Headers, and top & bottom fixed rows
                containerBackground: '#2D9596',


            },
        },
    });

    let [currentTarget, setCurrentTarget] = React.useState('home')

    function CustomPagination() {
        const apiRef = useGridApiContext();
        const page = useGridSelector(apiRef, gridPageSelector);
        const pageCount = useGridSelector(apiRef, gridPageCountSelector);

        return (
            <Pagination
                color="primary"
                variant="outlined"
                shape="rounded"
                page={page + 1}
                count={pageCount}
                // @ts-expect-error
                renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
                onChange={(event, value) => apiRef.current.setPage(value - 1)}
            />
        );
    }
    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    const customToolbar = () => {
        return (
            <GridToolbarContainer >
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    const renderActionColumn = () => {
        // Buttons Logic
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DrButton size={'small'} style={{ margin: '5px' }}>View</DrButton>
                <DrButton size={'small'} style={{ margin: '5px' }}><DeleteOutlineOutlined /></DrButton>
                <DrButton size={'small'} style={{ margin: '5px' }}><EditNoteOutlined /></DrButton>
            </Box>
        )
    }
    const columns = [
        {
            field: 'fullName',
            headerName: 'Full name',
            sortable: false,
            minWidth: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`, headerAlign: 'center'
        },
        { field: 'id', headerName: 'ID', minWidth: '130', headerAlign: 'center' },
        { field: 'phone', headerName: 'Phone', minWidth: '130', resizable: false, headerAlign: 'center' },
        { field: 'doctor', headerName: 'Doctor', minWidth: '120', headerAlign: 'center' },
        {
            field: 'time',
            headerName: 'Time',
            type: 'time',
            minWidth: '120', resizable: false, headerAlign: 'center'
        },
        { field: 'date', headerName: 'Booking Date', minWidth: '120', resizable: false, },
        { field: 'action', renderCell: renderActionColumn, headerName: 'Action', minWidth: '220', resizable: false, headerAlign: 'center' },


    ];

    const rows = [
        {
            id: '6',
            date: 'Feb 3, 2023',
            firstName: ' Maya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '13:05'
        },
        {
            id: '5',
            date: 'Feb 3, 2023',
            firstName: 'aya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '12:05'
        }, {
            id: '4',
            date: 'Feb 3, 2023',
            firstName: ' Maya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '13:05'
        },
        {
            id: '3',
            date: 'Feb 3, 2023',
            firstName: 'aya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '12:05'
        }, {
            id: '2',
            date: 'Feb 3, 2023',
            firstName: ' Maya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '13:05'
        },
        {
            id: '1',
            date: 'Feb 3, 2023',
            firstName: 'aya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '12:05'
        },]



    return (
        <>
            <HomePageLayout drawerItems={
                <>


                    <List style={{ color: "#2D9596" }}>
                        <ListItem key={"profile"} disablePadding >
                            <ListItemButton onClick={() => { setCurrentTarget('profile') }} selected={currentTarget === 'profile' ? true : false}>
                                <ListItemIcon>
                                    <AccountCircleOutlinedIcon fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"profile"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={"home"} disablePadding>
                            <ListItemButton onClick={() => { setCurrentTarget('home') }} selected={currentTarget === 'home' ? true : false}>
                                <ListItemIcon>
                                    <HomeOutlined fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"home"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={"add"} disablePadding>
                            <ListItemButton onClick={() => { setCurrentTarget('add') }} selected={currentTarget === 'add' ? true : false}>
                                <ListItemIcon>
                                    <AddCircleOutlineOutlinedIcon fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"add"} />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </>
            }>
                {(currentTarget === 'home' ? true : false) && <>
                    <Typography component={'h2'} variant='h4' sx={{ mt: 10 }}>Home Page</Typography>
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
                            rows={rows}
                            columns={columns}
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
                </>
                }
                {(currentTarget === 'profile' ? true : false) &&
                    <>

                    </>
                }

                {(currentTarget === 'add' ? true : false) &&
                    <>
                        <Grid container>
                            <Grid item xs={false} sm={2} md={2}>
                                <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '150px' }, height: { xs: '0', sm: '0', lg: '150px' }, mt: 10, mr: 3 }} />
                            </Grid>
                            <Grid item xs={12} sm={10} md={10}>
                                <Box fullwidth sx={{ mt: 5, }}>
                                    <Typography component={'h2'} variant='h6' sx={{ bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Patient info</Typography>
                                    <Divider sx={{ borderWidth: '1px', borderColor: 'black' }}></Divider>
                                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                                        <Grid container columnGap={20} rowGap={3}>
                                            <Grid item xs={4}>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="firstName"
                                                    name="firstName"
                                                    label="First Name"
                                                    value={formik.values.firstName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="lastName"
                                                    name="lastName"
                                                    label="Last Name"
                                                    value={formik.values.lastName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="phone"
                                                    name="phone"
                                                    label="Phone"
                                                    value={formik.values.phone}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    type='date'
                                                    id="birthDate"
                                                    name="birthDate"
                                                    helperText='Birth Date'
                                                    value={formik.values.birthDate}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="address"
                                                    name="address"
                                                    label="Address"
                                                    value={formik.values.address}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="sex"
                                                    name="sex"

                                                    label='Sex'
                                                    select
                                                    value={formik.values.sex}
                                                    onChange={formik.handleChange}
                                                >
                                                    <MenuItem value={'Male'}>Male</MenuItem>
                                                    <MenuItem value={'Female'}>Female</MenuItem>
                                                </TextField>
                                            </Grid>
                                        </Grid>
                                        <Typography component={'h2'} variant='h6' sx={{ mt: 8, bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Date info</Typography>
                                        <Divider sx={{ borderWidth: '1px', borderColor: 'black' }}></Divider>
                                        <Grid container columnGap={3} rowGap={10} sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                                            <Grid item xs={2}>
                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', width: '100%', textAlign: 'center', boxShadow: '3px 3px 5px gray' }}>Doctor</Typography>
                                            </Grid>
                                            <Grid item xs={8}>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="doctor"
                                                    name="doctor"
                                                    sx={{ width: '200px' }}
                                                    label='Doctor'
                                                    select
                                                    value={formik.values.doctor}
                                                    onChange={formik.handleChange}
                                                >
                                                    {/* map the array  */}
                                                    <MenuItem value={'Maher'}>Maher</MenuItem>
                                                    <MenuItem value={'Ali'}>Ali</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', width: '100%', textAlign: 'center', boxShadow: '3px 3px 5px gray' }}>Date</Typography>
                                            </Grid>
                                            <Grid item xs={8}>

                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                    fullWidth
                                                    id="date"
                                                    name="date"
                                                    type='date'
                                                    value={formik.values.date}
                                                    onChange={formik.handleChange}
                                                >
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', width: '100%', textAlign: 'center', boxShadow: '3px 3px 5px gray' }}>Time</Typography>
                                            </Grid>
                                            <Grid item xs={7} >

                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                    fullWidth
                                                    id="time"
                                                    name="time"
                                                    type='time'
                                                    value={formik.values.time}
                                                    onChange={formik.handleChange}
                                                >
                                                </TextField>
                                            </Grid>

                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </>
                }
            </HomePageLayout>
        </>
    );
}