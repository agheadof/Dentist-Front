import * as React from 'react';
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

export default function ReceptionHome() {



    let [currentTarget, setCurrentTarget] = React.useState('home')


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
                {(currentTarget === 'home' ? true : false) &&
                    <Home {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination }} />
                }
                {(currentTarget === 'profile' ? true : false) &&
                    <Profile {...{ theme: theme, customToolbar: customToolbar, CustomPagination: CustomPagination }} />
                }

                {(currentTarget === 'add' ? true : false) &&
                    <Add />
                }
            </HomePageLayout>
        </>
    );
}