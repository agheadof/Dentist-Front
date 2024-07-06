import * as React from 'react';
import HomePageLayout from '../components/HomePageLayout'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Box, Typography } from '@mui/material';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
    DataGrid, gridClasses, GridToolbar, gridPageCountSelector,
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

import { createTheme, ThemeProvider } from '@mui/material/styles';
import DrButton from '../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';


export default function ReceptionHome() {

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
        return (<GridToolbarContainer >
            <GridToolbarColumnsButton style={{ color: '#2D9596', }} />
            <GridToolbarFilterButton />
            <GridToolbarExport />
        </GridToolbarContainer>)
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
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        { field: 'id', headerName: 'ID', minWidth: '130' },
        { field: 'phone', headerName: 'Phone', minWidth: '130', resizable: false },
        { field: 'doctor', headerName: 'Doctor', minWidth: '120' },
        {
            field: 'time',
            headerName: 'Time',
            type: 'time',
            minWidth: '120', resizable: false
        },
        { field: 'date', headerName: 'Booking Date', minWidth: '120', resizable: false, },
        { field: 'action', renderCell: renderActionColumn, headerName: 'Action', minWidth: '220', resizable: false },


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
                <Typography component={'h1'} varient={'h2'}>Home Page</Typography>
                <ThemeProvider theme={theme}>
                    <DataGrid
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        pageSizeOptions={[PAGE_SIZE]}
                        sx={{
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
            </HomePageLayout>
        </>
    );
}