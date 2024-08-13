


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
        { name: 'Dr.name', value: 'Bashar' },
        { name: 'Email', value: 'jana@example.com' },
        { name: 'Phone', value: '096541238' },
    ];

    const rows = [
        {
            id: '6',
            name: 'raghad',
            date: 'Feb 3, 2023',
            time: '13:05',
            action: 'view',
            firstName: ' raghad',
            lastName: 'yousef',
            doctor: 'Aragon',
            sex: 'female',
            address: 'Homs',
            phone: '+963912345678',
            age: "24"
        },
        {
            id: '7',
            name: 'raghad',
            date: 'Feb 3, 2023',
            time: '13:05',
            action: 'view',
            firstName: ' raghad',
            lastName: 'yousef',
            doctor: 'Aragon',
            sex: 'female',
            address: 'Homs',
            phone: '+963912345678',
            age: "24"
        }, {
            id: '2',
            name: 'raghad',
            date: 'Feb 3, 2023',
            time: '13:05',
            action: 'view',
            firstName: ' raghad',
            lastName: 'yousef',
            doctor: 'Aragon',
            sex: 'female',
            address: 'Homs',
            phone: '+963912345678',
            age: "24"
        }, {
            id: '1',
            name: 'raghad',
            date: 'Feb 3, 2023',
            time: '13:05',
            action: 'view',
            firstName: ' raghad',
            lastName: 'yousef',
            doctor: 'Aragon',
            sex: 'female',
            address: 'Homs',
            phone: '+963912345678',
            age: "24"
        },]

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
    const data = [
        { date: '2024-07-25', visitors: 25 },
        { date: '2024-07-26', visitors: 18 },
        { date: '2024-07-27', visitors: 30 },
        { date: '2024-07-28', visitors: 22 },
        { date: '2024-07-29', visitors: 28 },
        { date: '2024-07-30', visitors: 35 },
        { date: '2024-07-31', visitors: 20 },
    ];

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
                <Grid item sx={7}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconWithNumber icon={GroupIcon} number={413} label="Total Patient" />
                        {separator}
                        <IconWithNumber icon={PersonAddIcon} number={63} label="New Patient" />
                        {separator}
                        <IconWithNumber icon={PersonIcon} number={350} label="Old Patient" />
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
                                height: "200px",
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

                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => setCurrentTarget("paitients")}>View all</DrButton>

                    </Box>
                    <Card sx={{width:"50%",height:"250px",mt:-2}}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Daily Visitors
                            </Typography>
                            <Bar data={chartData} options={{ responsive: true}}  />
                        </CardContent>
                    </Card>
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

                    </Box>

                </Grid>
            </Grid>

        </>
    )
}