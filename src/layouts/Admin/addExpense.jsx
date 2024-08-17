import * as React from 'react';
import DrButton from '../../components/DrButton'
import { ThemeProvider } from '@mui/material/styles';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import {
    Avatar,
    Collapse,
    List,
    ListItem,
    ListItemText, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid
} from '@mui/material';

import { useState } from 'react';
export default function AddExpense({ ...props }) {
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
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const userdata = [
        { name: 'Dr.name', value: 'Bashar' },
        { name: 'Email', value: 'jane@example.com' },
        { name: 'Phone', value: '096541238' },
    ];

    const [Item, setItem] = React.useState('');
    const [Date, setDate] = React.useState('');
    const [Amount, setAmount] = React.useState('');
    const [Type, setType] = React.useState('');
    const [Cost, setCost] = React.useState('');
    const [Note, setNote] = React.useState('');

    const handleItemChange = (event) => {
        setItem(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleCostChange = (event) => {
        setCost(event.target.value);
    };
    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };








    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '70px' }, height: { xs: '0', sm: '0', lg: '70px' }, mt: -1, mr: 1, borderRadius: "50%" }} />
                <Typography component={'h2'} variant='h6' sx={{ mt: 2, ml: 1 }}>Dr.Bashar</Typography>
                <Button
                    endIcon={
                        open ? <ExpandLess /> : <ExpandMore />
                    }
                    onClick={handleClick}
                >

                </Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Collapse in={open}>
                    <List>
                        {userdata.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.name} secondary={item.value} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </Box>
            <Box sx={{ margin: 15, mt: 1, border: '1px solid #ccc', borderRadius: 2, width: "80%", bgcolor: "white" }}>
                <Typography variant="h6" gutterBottom sx={{ bgcolor: "#2D9596", textAlign: "center", color: "white", width: "100%" }}>
                    Add Expense
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} sx={{ margin: 4 }}>
                        <Grid item xs={5}>
                            <TextField
                                label="Item"
                                value={Item}
                                onChange={handleItemChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Amount"
                                value={Amount}
                                onChange={handleAmountChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Type"
                                value={Type}
                                onChange={handleTypeChange}
                                select
                                fullWidth
                                margin="normal"
                            >
                                <MenuItem value="medicine">Medicine</MenuItem>
                                <MenuItem value="taxes">Taxes</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                value={Date}
                                type='date'
                                onChange={handleDateChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Cost"
                                value={Cost}
                                onChange={handleCostChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Note"
                                value={Note}
                                onChange={handleNoteChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>



                    </Grid>




                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: "100%", padding: 2 }}>
                        <DrButton size={'small'} style={{ margin: '5px' }} type='submit'>Confirm</DrButton>
                        <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => setCurrentTarget("finance")}>Cancel</DrButton>

                    </Box>

                </form>
            </Box>
        </ThemeProvider>
    );
};