import * as React from 'react';
import DrButton from '../../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';
import {
    Avatar, Box, Typography, Grid, Button,
    Collapse,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from '@mui/material';
import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
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
import doctorFakedata from './doctorFakedata.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashBord({ ...props }) {
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
        const handleView = (value) => {
            console.log(value);
            handlePrev(currentTarget);
            setCurrentTarget('view')
            setPatient(value)
        }
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => handleView(value.row)}>View</DrButton>

            </Box>
        )
    }


    const columns = [
        { field: 'id', headerName: 'ID', minWidth: '130', headerAlign: 'center' },
        {
            field: 'name',
            headerName: 'Patient name',
            sortable: false,
            minWidth: 160,
            headerAlign: 'center'
        },

        { field: 'date', headerName: 'Date', minWidth: '120', resizable: false, },
        {
            field: 'time',
            headerName: 'Time',
            type: 'time',
            minWidth: '120', resizable: false, headerAlign: 'center'
        },
        { field: 'action', renderCell: (value) => renderActionColumn(value), headerName: 'Action', minWidth: '220', resizable: false, headerAlign: 'center' },


    ];
    const userdata = [
        { name: 'Dr.name', value: doctorFakedata.doctorInfo.name },
        { name: 'Email', value: doctorFakedata.doctorInfo.email },
        { name: 'Phone', value: doctorFakedata.doctorInfo.phone },
    ];

    const rows = doctorFakedata.patients;

    const IconWithNumber = ({ icon: Icon, number, label }) => (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "20%", height: "20%" }}>
            <IconButton sx={{ width: "100%" }}>
                <Icon sx={{ fontSize: 50, color: "#2D9596" }} />
            </IconButton>
            <Typography sx={{ fontSize: 30 }} variant="caption">{number}</Typography>
            <Typography sx={{ fontSize: 15, color: "#2D9596" }} variant="caption">{label}</Typography>
        </Box>
    );


    const separator = (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1, mt: 3 }}>
            <strong style={{ color: "#2D9596" }}>·</strong>
            <strong style={{ color: "#2D9596" }}>·</strong>
        </Box>
    );
    const data = doctorFakedata.visitorData;

    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Number of Visitors',
                data: data.map(item => item.visitors),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconWithNumber icon={GroupIcon} number={doctorFakedata.statistics.totalPatients} label="Total Patient" />
                        {separator}
                        <IconWithNumber icon={PersonAddIcon} number={doctorFakedata.statistics.newPatients} label="New Patient" />
                        {separator}
                        <IconWithNumber icon={PersonIcon} number={doctorFakedata.statistics.oldPatients} label="Old Patient" />
                    </Box>
                    <Typography component={'h2'} variant='h4' sx={{ mt: 5 }}>My paitient</Typography>
                    <ThemeProvider theme={theme}>
                        <DataGrid

                            paginationModel={paginationModel}
                            onPaginationModelChange={setPaginationModel}
                            pageSizeOptions={[PAGE_SIZE]}

                            sx={{
                                mt: 0,
                                width: "100%",
                                height: "50%",
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
                                        pageSize: 4,
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

                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => setCurrentTarget("paitients")}>View all</DrButton>
                    </Box>


                </Grid>
                <Grid item xs={5}>
                    <Box sx={{ position: 'absolute', top: 0, right: 0, m: 2 }}>
                        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Typography component={'h2'} variant='h6' sx={{ mr: 1 }}>Dr.Bashar</Typography>
                            <Avatar variant='rounded' sx={{ width: '50px', height: '50px', borderRadius: "50%" }} />
                            <Button
                                endIcon={open ? <ExpandLess /> : <ExpandMore />}
                                onClick={handleClick}
                            />
                        </Box>

                        <Collapse in={open}>
                            <List>
                                {userdata.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={item.name} secondary={item.value} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                        <Card sx={{ width: "100%", height: "250px", mt: 10 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Daily Visitors
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