import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import HomePageLayout from '../../components/HomePageLayout'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
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
import { createTheme } from '@mui/material/styles';

import Profile from './profile';
import Add from './add';
import Home from './home';
import ViewPatient from './viewPatient';
import Pay from './pay';
import EditPatient from './EditPatient';
import fakeData from './fakeData.json';

export default function ReceptionHome() {

    let [currentTarget, setCurrentTarget] = React.useState('home')

    let [patient, setPatient] = React.useState({})
    const homeRef = useRef(null);

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


    let [prevTarget, setPrevTarget] = React.useState(['home'])
    const handlePrev = (prev) => {
        setPrevTarget([...prevTarget, prev]);
    }

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


    const customToolbar = () => {
        return (
            <GridToolbarContainer >
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    const [rows, setRows] = useState(fakeData.patients);

    const handleUpdatePatient = useCallback((updatedPatient) => {
        console.log("تحديث المريض في ReceptionHome:", updatedPatient);
        setRows(prevRows => prevRows.map(row =>
            row.id === updatedPatient.id ? { ...row, ...updatedPatient } : row
        ));
        setCurrentTarget('home');
    }, []);

    return (
        <>
            <HomePageLayout setCurrentTarget={setCurrentTarget} prevTarget={prevTarget} drawerItems={
                <>


                    <List style={{ color: "#2D9596" }}>
                        <ListItem key={"profile"} disablePadding >
                            <ListItemButton onClick={() => { handlePrev(currentTarget); setCurrentTarget('profile') }} selected={currentTarget === 'profile' ? true : false}>
                                <ListItemIcon>
                                    <AccountCircleOutlinedIcon fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"profile"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={"home"} disablePadding>
                            <ListItemButton onClick={() => { handlePrev(currentTarget); setCurrentTarget('home') }} selected={currentTarget === 'home' ? true : false}>
                                <ListItemIcon>
                                    <HomeOutlined fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"home"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={"add"} disablePadding>
                            <ListItemButton onClick={() => { handlePrev(currentTarget); setCurrentTarget('add') }} selected={currentTarget === 'add' ? true : false}>
                                <ListItemIcon>
                                    <AddCircleOutlineOutlinedIcon fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"add"} />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </>
            }>
                {(currentTarget === 'home' ? true : false) &&
                    <Home ref={homeRef} {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget, setPatient: setPatient, handlePrev: handlePrev, currentTarget: currentTarget, rows: rows, setRows: setRows }} />
                }

                {(currentTarget === 'profile' ? true : false) &&
                    <Profile {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination }} />
                }

                {(currentTarget === 'add' ? true : false) &&
                    <Add />
                }
                {(currentTarget === 'view' ? true : false) &&
                    <ViewPatient {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                {(currentTarget === 'pay' ? true : false) &&
                    <Pay {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination }} />
                }
                {(currentTarget === 'edit' ? true : false) &&
                    <EditPatient {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget, onUpdatePatient: handleUpdatePatient }} />
                }
            </HomePageLayout>
        </>
    );
}