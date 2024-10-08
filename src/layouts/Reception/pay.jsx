import * as React from 'react';
import DrButton from '../../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/material/styles';


export default function Pay({ ...props }) {
    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination

    const fakeData = [
        { id: 1, date: '2024-03-15', treatment: 'Dental Cleaning', status: 'unpaid', tooth: 'All', price: '$100', doctor: 'Dr. Smith' },
        { id: 2, date: '2024-03-16', treatment: 'Root Canal', status: 'paid', tooth: '16', price: '$500', doctor: 'Dr. Johnson' },
        { id: 3, date: '2024-03-17', treatment: 'Filling', status: 'unpaid', tooth: '24', price: '$150', doctor: 'Dr. Brown' },
        { id: 4, date: '2024-03-18', treatment: 'Crown', status: 'paid', tooth: '36', price: '$800', doctor: 'Dr. Davis' },
        { id: 5, date: '2024-03-19', treatment: 'Extraction', status: 'unpaid', tooth: '48', price: '$200', doctor: 'Dr. Wilson' },
    ];

    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    const renderActionColumn = (value) => {
        const handlePay = (value) => {
            // Pay Logic

        }
        return (<>
            {(value.status === 'payed' ? true : false) && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => handlePay(value)}>Pay</DrButton>

            </Box>}
        </>
        )
    }

    const columns = [

        { field: 'date', headerName: 'Booking Date', minWidth: '120', resizable: false, headerAlign: 'center' },
        { field: 'treatment', headerName: 'Treatment', minWidth: '130', resizable: false, headerAlign: 'center' },
        { field: 'status', headerName: 'Status', minWidth: '130', resizable: false, headerAlign: 'center' },
        { field: 'tooth', headerName: 'Tooth', minWidth: '130', resizable: false, headerAlign: 'center' },
        { field: 'price', headerName: 'Price', minWidth: '130', resizable: false, headerAlign: 'center' },
        { field: 'doctor', headerName: 'Doctor', minWidth: '120', headerAlign: 'center' },
        { field: 'action', renderCell: (value) => renderActionColumn(value), headerName: 'Action', resizable: false, headerAlign: 'center' },


    ];


    return (
        <ThemeProvider theme={theme}>
            <Typography component={'h2'} variant='h6' sx={{ mt: 10, bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Cost of treatment</Typography>
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
                disableRowSelectionOnClick
                rows={fakeData}
            />
        </ThemeProvider>
    )
}