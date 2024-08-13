
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Card, CardContent } from '@mui/material';
import * as React from 'react';
import DrButton from '../../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';
import {
    Avatar, Box, Typography, Grid, Button,
    Collapse,
    List,
    ListItem,
    ListItemText,

} from '@mui/material';
import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashBord({ ...props }) {
    const doctorData = [
        { doctorName: 'Dr. Smith', patients: 40 },
        { doctorName: 'Dr. Johnson', patients: 35 },
        { doctorName: 'Dr. Brown', patients: 50 },
        { doctorName: 'Dr. Garcia', patients: 45 },
    ];

    const chartData = {
        labels: doctorData.map(item => item.doctorName),
        datasets: [
            {
                label: 'Number of Patients',
                data: doctorData.map(item => item.patients),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };




    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination
    let setCurrentTarget = props.setCurrentTarget
    let setPatient = props.setPatient
    let handlePrev = props.handlePrev
    let currentTarget = props.currentTarget

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    const renderActionColumn = (value) => {
        // Buttons Logic

        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DrButton size={'small'} style={{ margin: '5px' }}><DeleteOutlineOutlined /></DrButton>
                <DrButton size={'small'} style={{ margin: '5px' }}><EditNoteOutlined /></DrButton>

            </Box>
        )
    }


    const columns = [
        { field: 'Item', headerName: 'Item', minWidth: '130', headerAlign: 'center' },


        { field: 'Amount', headerName: 'Amount', minWidth: '120', resizable: false, },
        {
            field: 'Pieces',
            headerName: 'Pieces',
            type: 'number',
            minWidth: '120', resizable: false, headerAlign: 'center'
        },
        {
            field: 'Price',
            headerName: 'Price',
            type: 'number',
            minWidth: '120', resizable: false, headerAlign: 'center'
        },
        {
            field: 'Total Price',
            headerName: 'Total Price',
            type: 'number',
            minWidth: '120', resizable: false, headerAlign: 'center'
        },

    ];
    const financeCol = [
        { field: 'teatment', headerName: 'Teatment', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'status', headerName: 'Status', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'cost', headerName: 'Cost', headerAlign: 'center' },
        { field: 'profit', headerName: 'Profit' },
        { field: 'action', renderCell: (value) => renderActionColumn(value), headerName: 'Action', minWidth: '220', resizable: false, headerAlign: 'center' },



    ];
    const userdata = [
        { name: 'Dr.name', value: 'Bashar' },
        { name: 'Email', value: 'jane@example.com' },
        { name: 'Phone', value: '096541238' },
    ];







    return (
        <>
            <Grid container spacing={2}>
                <Grid item sx={7}>
                    <ThemeProvider theme={theme}>
                        <DataGrid

                            paginationModel={paginationModel}
                            onPaginationModelChange={setPaginationModel}
                            pageSizeOptions={[PAGE_SIZE]}

                            sx={{
                                height: "70%",
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
                    <Typography component={'h2'} variant='h6' onClick={() => setCurrentTarget("tratment")} sx={{ mt: 8, mb: 2, bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center', borderRadius: "10px" }}>+ Add Tratment</Typography>

                    <ThemeProvider theme={theme}>
                        <DataGrid

                            paginationModel={paginationModel}
                            onPaginationModelChange={setPaginationModel}
                            pageSizeOptions={[PAGE_SIZE]}

                            sx={{
                                height: "70%",
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
                </Grid>
                <Grid item sx={5}>
                    <Box >
                        <Box sx={{ display: "flex" }}>
                            <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '70px' }, height: { xs: '0', sm: '0', lg: '70px' }, mt: 1, mr: 1, borderRadius: "50%" }} />
                            <Typography component={'h2'} variant='h6' sx={{ mt: 3, ml: 1 }}>Dr.Bashar</Typography>
                            <Button
                                endIcon={
                                    open ? <ExpandLess /> : <ExpandMore />
                                }
                                onClick={handleClick}
                            >

                            </Button>
                        </Box>

                        <Box >
                            <Collapse in={open}>
                                <List>
                                    {userdata.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemText primary={item.name} secondary={item.value} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </Box>
                        <Box sx={{ bgcolor: "lightgray", borderRadius: "20px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "50px", mt: 5 }} >
                            <Box sx={{ display: "flex", justifyContent: "start", bgcolor: "white", borderRadius: "20px", width: "95%", height: "40px", paddingTop: 1 }}>
                                <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '25px' }, height: { xs: '0', sm: '0', lg: '25px' }, mr: -1, borderRadius: "50%" }} />
                                <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '25px' }, height: { xs: '0', sm: '0', lg: '25px' }, mr: -1, borderRadius: "50%" }} />

                                <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '25px' }, height: { xs: '0', sm: '0', lg: '25px' }, mr: -1, borderRadius: "50%" }} />
                                <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '25px' }, height: { xs: '0', sm: '0', lg: '25px' }, mr: -1, borderRadius: "50%" }} />
                                <Box sx={{ width: "10px" }}> </Box>
                                <AddCircleOutlineOutlinedIcon fontSize="large" style={{ color: "gray", width: '20px', height: '20px' }} onClick={() => setCurrentTarget("user")} />
                            </Box>


                        </Box>
                        <Card sx={{mt:5}}>
                            <CardContent >
                                <Typography variant="h6" gutterBottom>
                                    Patients per Doctor
                                </Typography>
                                <Bar data={chartData} options={{ responsive: true }} />
                            </CardContent>
                        </Card>


                    </Box>


                </Grid>
            </Grid>

        </>
    )
}