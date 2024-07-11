
import * as React from 'react';
import DrButton from '../../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/material/styles';



export default function Home({ ...props }) {
    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination
    let setCurrentTarget = props.setCurrentTarget
    let setPatient = props.setPatient
    let handlePrev = props.handlePrev
    let currentTarget = props.currentTarget




    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    const renderActionColumn = (value) => {
        // Buttons Logic
        const handleView = (value) => {
            handlePrev(currentTarget);
            setCurrentTarget('view')
            setPatient(value)
        }
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => handleView(value.row)}>View</DrButton>
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
        { field: 'action', renderCell: (value) => renderActionColumn(value), headerName: 'Action', minWidth: '220', resizable: false, headerAlign: 'center' },


    ];

    const rows = [
        {
            id: '6',
            firstName: ' Maya',
            lastName: 'Michael',
            doctor: 'Aragon',
            sex: 'female',
            address: 'Homs',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '13:05'
        },
        {
            id: '5',
            firstName: 'aya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '12:05'
        }, {
            id: '4',
            firstName: ' Maya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '13:05'
        },
        {
            id: '3',
            firstName: 'aya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '12:05'
        }, {
            id: '2',
            firstName: ' Maya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '13:05'
        },
        {
            id: '1',
            firstName: 'aya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '12:05'
        },]



    return (
        <>
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
    )
}