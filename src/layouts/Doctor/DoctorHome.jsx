import * as React from 'react';
import HomePageLayout from '../../components/HomePageLayout'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
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

import ViewPatient from './viewPatient';
import DashBoard from './dashBoard';
import MyPaitient from './myPaitient';
import Tratment from './tratment';

import receptionFakeData from './doctorFakedata.json';

export default function DoctorHome() {

    let [currentTarget, setCurrentTarget] = React.useState('profile')

    let [patient, setPatient] = React.useState({})


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

    // استخدام البيانات الوهمية من ملف JSON
    const { patients, appointments, doctors, dashboardData } = receptionFakeData;

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
                        <ListItem key={"dashboard"} disablePadding>
                            <ListItemButton onClick={() => { handlePrev(currentTarget); setCurrentTarget('dashBoard') }} selected={currentTarget === 'home' ? true : false}>
                                <ListItemIcon>
                                    <DashboardIcon fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"dashboard"} />
                            </ListItemButton>
                        </ListItem>

                    </List>

                </>
            }>
                {(currentTarget === 'dashBoard' ? true : false) &&
                    <DashBoard {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget, setPatient: setPatient, handlePrev: handlePrev, currentTarget: currentTarget, dashboardData: dashboardData }} />
                }
                {(currentTarget === 'profile' ? true : false) &&
                    <Profile {...{
                        theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, doctorProfile: doctors[0]
                    }} />
                }


                {(currentTarget === 'view' ? true : false) &&
                    <ViewPatient {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                {(currentTarget === 'paitients' ? true : false) &&
                    <MyPaitient {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget, patients: patients }} />
                }
                {(currentTarget === 'tratment' ? true : false) &&
                    <Tratment {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
            </HomePageLayout>
        </>
    );
}