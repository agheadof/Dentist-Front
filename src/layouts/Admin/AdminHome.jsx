import * as React from 'react';
import HomePageLayout from '../../components/HomePageLayout'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddLaboratory from './addLaboratory';
import Laboratory from './laboratory';
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
import Home from './home';
import DashBoard from './dashBoard';
import AddUser from './addUser';
import Finance from './finance';
import Tratment from './tratment';
import UserDoctor from './userDoctor';
import UserEmployee from './userEmployee';
import UserPatient from './userPatient';
import AddExpense from './addExpense';
import ViewInvoice from './viewInvoice';


export default function AdminHome() {
    const LaboratoryArray =[];
    let [currentTarget, setCurrentTarget] = React.useState('home')
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


    let [prevTarget, setPrevTarget] = React.useState(['profile'])
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
                            <ListItemButton onClick={() => { handlePrev(currentTarget); setCurrentTarget('dashboard') }} selected={currentTarget === 'dashboard' ? true : false}>
                                <ListItemIcon>
                                    <DashboardIcon fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"dashboard"} />
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

                        <ListItem key={"finance"} disablePadding>
                            <ListItemButton onClick={() => { handlePrev(currentTarget); setCurrentTarget('finance') }} selected={currentTarget === 'finance' ? true : false}>
                                <ListItemIcon>
                                    <AttachMoneyIcon fontSize="large" style={{ color: "#2D9596" }} />
                                </ListItemIcon>
                                <ListItemText primary={"finance"} />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </>
            }>
                {(currentTarget === 'home' ? true : false) &&
                    <Home {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget, setPatient: setPatient, handlePrev: handlePrev, currentTarget: currentTarget }} />
                }
                {(currentTarget === 'profile' ? true : false) &&
                    <Profile {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination }} />
                }

                {(currentTarget === 'dashboard' ? true : false) &&
                    <DashBoard {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget, setPatient: setPatient, handlePrev: handlePrev, currentTarget: currentTarget }} />

                }
                {(currentTarget === 'finance' ? true : false) &&
                    <Finance {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                {(currentTarget === 'user' ? true : false) &&
                    <AddUser {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                {(currentTarget === 'tratment' ? true : false) &&
                    <Tratment {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                {(currentTarget === 'doctor' ? true : false) &&
                    <UserDoctor {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                {(currentTarget === 'employee' ? true : false) &&
                    <UserEmployee {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                {(currentTarget === 'patient' ? true : false) &&
                    <UserPatient {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
               
                {(currentTarget === 'expenses' ? true : false) &&
                    <AddExpense {...{ patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                {(currentTarget === 'laboratory' ? true : false) &&
                    <Laboratory {...{LaboratoryArray:LaboratoryArray, patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                 {(currentTarget === 'addlaboratory' ? true : false) &&
                    <AddLaboratory {...{LaboratoryArray:LaboratoryArray, patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
                 {(currentTarget === 'viewinvoice' ? true : false) &&
                    <ViewInvoice {...{LaboratoryArray:LaboratoryArray, patient: patient, theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination, setCurrentTarget: setCurrentTarget }} />
                }
            </HomePageLayout>
        </>
    );
}