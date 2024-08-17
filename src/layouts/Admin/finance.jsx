import * as React from 'react';
import DrButton from '../../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';
import finance from './adminFakeData.json'

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
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

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

export default function Finance({ ...props }) {
    const [financeData, setFinanceData] = useState(finance);

    const chartData = {
        labels: financeData.financeSummary?.map(item => item.fName) || [],
        datasets: [
            {
                label: 'Costs',
                data: financeData.financeSummary?.map(item => item.cost) || [],
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

    let currentTarget = props.currentTarget




    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    const renderActionColumn = (value) => {
        // Buttons Logic
        const handleView = (value) => {

            setCurrentTarget('viewinvoice');

        }
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => handleView(value.row)}>View</DrButton>

            </Box>
        )
    }
    const renderActionColumn2 = (value) => {
        // Buttons Logic
        const handleView = (value) => {

            setCurrentTarget("expenses");
            setPatient(value)
        }
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => handleView(value.row)}>View</DrButton>

            </Box>
        )
    }


    const columns = [

        {
            field: 'laboratory',
            headerName: 'Laboratory',
            type: 'text',
            minWidth: '130', resizable: false, headerAlign: 'center'
        },
        {
            field: 'date',
            headerName: 'Date',
            type: 'text',
            minWidth: '50', resizable: false, headerAlign: 'center',
            valueGetter: (params) => new Date(params.value)
        },
        {
            field: 'Total Price',
            headerName: 'Total Price',
            type: 'text',
            minWidth: '50', resizable: false, headerAlign: 'center'
        },
        { field: 'action', renderCell: (value) => renderActionColumn(value), headerName: 'Action', minWidth: '50', resizable: false, headerAlign: 'center' },


    ];
    const financeCol = [
        { field: 'Item', headerName: 'Item', minWidth: '75', headerAlign: 'center' },


        { field: 'Amount', headerName: 'Amount', minWidth: '75', resizable: false, },
        { field: 'type', headerName: 'Type', minWidth: '75', resizable: false, headerAlign: 'center' },
        {
            field: 'date',
            headerName: 'Date',
            type: 'date',
            minWidth: '75', resizable: false, headerAlign: 'center',
            valueGetter: (params) => new Date(params.value)
        },
        {
            field: 'Cost',
            headerName: 'Cost',
            type: 'number',
            minWidth: '75', resizable: false, headerAlign: 'center'
        },

        { field: 'note', headerName: 'Note', minWidth: '75', resizable: false, headerAlign: 'center' },
        { field: 'action', renderCell: (value) => renderActionColumn2(value), headerName: 'Action', minWidth: '50', resizable: false, headerAlign: 'center' },



    ];







    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <ThemeProvider theme={theme}>
                        <h2>Invoices</h2>
                        <DataGrid

                            paginationModel={paginationModel}
                            onPaginationModelChange={setPaginationModel}
                            pageSizeOptions={[PAGE_SIZE]}

                            sx={{

                                height: "40%",
                                '& .MuiDataGrid-cell--textLeft': { textAlign: 'center' },
                                '& .MuiDataGrid-toolbarContainer': {
                                    '& .MuiButton-text': {
                                        fontSize: '10px !important',
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
                            rows={financeData.invoices}
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
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <DrButton style={{ marginTop: '5px', marginBottom: '20px' }} onClick={() => setCurrentTarget("addlaboratory")}>Add</DrButton>

                        </div>
                    </ThemeProvider>

                    <ThemeProvider theme={theme}>
                        <h2>Expenses</h2>
                        <DataGrid

                            paginationModel={paginationModel}
                            onPaginationModelChange={setPaginationModel}
                            pageSizeOptions={[PAGE_SIZE]}

                            sx={{
                                height: "40%",
                                '& .MuiDataGrid-cell--textLeft': { textAlign: 'center' },
                                '& .MuiDataGrid-toolbarContainer': {
                                    '& .MuiButton-text': {
                                        fontSize: '10px !important',
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
                            rows={financeData.expenses}
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
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <DrButton style={{ marginTop: '5px', marginBottom: '20px' }} onClick={() => setCurrentTarget("expenses")}>Add</DrButton>
                        </div>
                    </ThemeProvider>



                </Grid>

                <Grid item xs={3} >
                    <Card sx={{ mt: 10, ml: 2, width: "300px" }}>
                        <CardContent >
                            <Typography variant="h6" gutterBottom>
                                Costs
                            </Typography>
                            <Bar data={chartData} options={{ responsive: true }} />
                        </CardContent>
                    </Card>


                </Grid>
            </Grid>

        </>
    )
}