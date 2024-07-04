import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import HomPageLayout from '../components/HomePageLayout'
import DrTable from '../components/DrTable'
import Checkbox from '@mui/joy/Checkbox';
import Link from '@mui/joy/Link';


import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function ReceptionHome() {

    let [currentTarget, setCurrentTarget] = React.useState('home')
    const [order, setOrder] = React.useState('desc');
    const [selected, setSelected] = React.useState([]);

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const rows = [
        {
            id: 'INV-1234',
            date: 'Feb 3, 2023',
            status: 'Refunded',
            firstName: ' Maya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '13:05'
        },
        {
            id: 'INV-1234',
            date: 'Feb 3, 2023',
            status: 'Refunded',
            firstName: 'aya',
            lastName: 'Michael',
            doctor: 'Aragon',
            phone: '+963912345678',
            date: 'Feb 3, 2023',
            time: '13:05'
        },]

    function getComparator(
        order,
        orderBy,
    ) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }


    return (
        <>
            <HomPageLayout sidebar={
                <>
                    <List
                        size="sm"
                        sx={{
                            gap: 1,
                            '--List-nestedInsetStart': '30px',
                            '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        }}
                    >
                        <ListItem>
                            <ListItemButton onClick={() => setCurrentTarget('profile')} selected={currentTarget === 'profile' ? true : false}>
                                <AccountCircleRoundedIcon sx={{ color: "#2D9596" }} />
                                <ListItemContent>
                                    <Typography level="title-sm">Profile</Typography>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton onClick={() => setCurrentTarget('home')} selected={currentTarget === 'home' ? true : false}>
                                <HomeRoundedIcon sx={{ color: "#2D9596" }} />
                                <ListItemContent>
                                    <Typography level="title-sm">Home</Typography>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton onClick={() => setCurrentTarget('add')} selected={currentTarget === 'add' ? true : false}>
                                <AddCircleOutlineOutlinedIcon sx={{ color: "#2D9596" }} />
                                <ListItemContent>
                                    <Typography level="title-sm">Add</Typography>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </>
            }>
                {(currentTarget === 'home' ? true : false) &&
                    <>
                        <Typography level="h2" component="h1">
                            Home
                        </Typography>
                        <DrTable>

                            <thead >
                                <tr>
                                    <th style={{ width: 48, textAlign: 'center', padding: '12px 6px' }}>
                                        <Checkbox
                                            size="sm"
                                            indeterminate={
                                                selected.length > 0 && selected.length !== rows.length
                                            }
                                            checked={selected.length === rows.length}
                                            onChange={(event) => {
                                                setSelected(
                                                    event.target.checked ? rows.map((row) => row.id) : [],
                                                );
                                            }}
                                            color={
                                                selected.length > 0 || selected.length === rows.length
                                                    ? 'primary'
                                                    : undefined
                                            }
                                            sx={{ verticalAlign: 'text-bottom' }}
                                        />
                                    </th>
                                    <th style={{ width: 140, padding: '12px 6px', color: "white" }}>Patient name </th>
                                    <th style={{ width: 140, padding: '12px 6px', color: "white" }}>ID</th>
                                    <th style={{ width: 140, padding: '12px 6px', color: "white" }}>Phone</th>
                                    <th style={{ width: 140, padding: '12px 6px', color: "white" }}>Doctor</th>
                                    <th style={{ width: 140, padding: '12px 6px', color: "white" }}>Time</th>
                                    <th style={{ width: 140, padding: '12px 6px', color: "white" }}>Booking Date</th>
                                    <th style={{ width: 140, padding: '12px 6px', color: "white" }}>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {stableSort(rows, getComparator(order, 'id')).map((row) => (
                                    <tr key={row.id}>

                                        <td style={{ textAlign: 'center', width: 120 }}>
                                            <Checkbox
                                                size="sm"
                                                checked={selected.includes(row.id)}
                                                color={selected.includes(row.id) ? 'primary' : undefined}
                                                onChange={(event) => {
                                                    setSelected((ids) =>
                                                        event.target.checked
                                                            ? ids.concat(row.id)
                                                            : ids.filter((itemId) => itemId !== row.id),
                                                    );
                                                }}
                                                slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
                                                sx={{ verticalAlign: 'text-bottom' }}
                                            />
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.firstName + ' ' + row.lastName}</Typography>
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.id}</Typography>
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.phone}</Typography>
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.doctor}</Typography>
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.time}</Typography>
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.date}</Typography>
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.action}</Typography>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </DrTable>
                    </>
                }
                {(currentTarget === 'profile' ? true : false) &&
                    <Typography level="h2" component="h1">
                        Profile
                    </Typography>
                }
                {(currentTarget === 'add' ? true : false) &&
                    <Typography level="h2" component="h1">
                        Add
                    </Typography>
                }
            </HomPageLayout>
        </>
    );
}