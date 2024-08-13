
import * as React from 'react';
import DrButton from '../../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/material/styles';



export default function MyPaitient({ ...props }) {
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

   

    const columns = [
        {
            field: 'name',
            headerName: 'Patient name',
            sortable: false,
            minWidth: 160,
            headerAlign: 'center'
        },
        { field: 'cost', headerName: 'Cost',  headerAlign: 'center' },
        { field: 'profit', headerName: 'Profit' },
        {
            field: 'date',
            headerName: 'Date',
           
        },
        {
            field: 'dprecnt',
            headerName: 'Doctor precent',
            sortable: false,
            minWidth: 160,
            headerAlign: 'center'
        },{
            field: 'cprecnt',
            headerName: 'center precnt',
            sortable: false,
            minWidth: 160,
            headerAlign: 'center'
        },
    ];

    const rows = [
        {
           id:'1',
            name: 'raghad',
            cost:'250000',
            profit:"xxxx",
            date: 'Feb 3, 2023',
            dprecnt:'xxxx',
            cprecnt:'xxxx',
            firstName: ' raghad',
            lastName: 'yousef',
            doctor: 'Aragon',
            sex: 'female',
            address: 'Homs',
            phone: '+963912345678',
          
         
        },
        {
            id:'3',
            name: 'raghad',
            cost:'250000',
            profit:"xxxx",
            date: 'Feb 3, 2023',
            dprecnt:'xxxx',
            cprecnt:'xxxx',
            firstName: ' raghad',
            lastName: 'yousef',
            doctor: 'Aragon',
            sex: 'female',
            address: 'Homs',
            phone: '+963912345678',
         
        },   {
            id:'2',
            name: 'raghad',
            cost:'250000',
            profit:"xxxx",
            date: 'Feb 3, 2023',
            dprecnt:'manal',
            cprecnt:'xxxx',
            firstName: ' raghad',
            lastName: 'yousef',
            doctor: 'Aragon',
            sex: 'female',
            address: 'Homs',
            phone: '+963912345678',
         
        }, ]


    return (
        <>
            <Typography component={'h2'} variant='h4' sx={{ mt: 10 }}>My patient :</Typography>
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