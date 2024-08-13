import * as React from 'react';
import DrButton from '../../components/DrButton'
import { ThemeProvider } from '@mui/material/styles';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import {  Avatar,
    Collapse,
    List,
    ListItem,
    ListItemText,Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';

import { useState } from 'react';
export default function AddUSer({ ...props }) {
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

    const [First_Name, setFirst_Name] = React.useState('');
    const [BirthDate, setBirthDate] = React.useState('');
    const [Last_Name, setLast_Name] = React.useState('');
    const [Job_Title, setJob_Title] = React.useState('');
    const [Salary, setSalary] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const [Adress, setAdress] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Sex, setSex] = React.useState('');

    const handleFirst_NameChange = (event) => {
        setFirst_Name(event.target.value);
    };

    const handleBirthDateChange = (event) => {
        setBirthDate(event.target.value);
    };

    const handleLast_NameChange = (event) => {
        setLast_Name(event.target.value);
    };

    const handleJob_TitleChange = (event) => {
        setJob_Title(event.target.value);
    };
    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleAdressChange = (event) => {
        setAdress(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handleSexChange = (event) => {
        setSex(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ display: "flex",justifyContent:"end" }}>
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

            <Box sx={{ display: "flex",justifyContent:"end"}}>
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
            <Box sx={{ margin: 15, mt:1, border: '1px solid #ccc', borderRadius: 2, width: "80%", bgcolor: "white" }}>
                <Typography variant="h6" gutterBottom sx={{ bgcolor: "#2D9596", textAlign: "center", color: "white", width: "100%" }}>
                    Add User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} sx={{ margin: 4 }}>
                        <Grid item xs={5}>
                            <TextField
                                label="First Name"
                                value={First_Name}
                                onChange={handleFirst_NameChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Last Name"
                                value={Last_Name}
                                onChange={handleLast_NameChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label=""
                                type='date'
                                value={BirthDate}
                                onChange={handleBirthDateChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Sex"
                                value={Sex}
                                onChange={handleSexChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Phone"
                                type='phone'
                                value={Phone}
                                onChange={handlePhoneChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Adress"
                                value={Adress}
                                onChange={handleAdressChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Email"
                                type='email'
                                value={Email}
                                onChange={handleEmailChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Password"
                                type='password'
                                value={Password}
                                onChange={handlePasswordChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Salary/Peecentage"
                                value={Salary}
                                onChange={handleSalaryChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>


                        <Grid item xs={5}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Job Title</InputLabel>
                                <Select
                                    value={Job_Title}
                                    onChange={handleJob_TitleChange}
                                    label="Job_Title"
                                >
                                    <MenuItem value="doctor">Doctor</MenuItem>
                                    <MenuItem value="admin">Admin</MenuItem>
                                    <MenuItem value="reception">Reception</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>


                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>




                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: "100%", padding: 2 }}>
                        <DrButton size={'small'} style={{ margin: '5px' }} type='submit'>OK</DrButton>
                        <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => setCurrentTarget("dashboard")}>Cancel</DrButton>

                    </Box>

                </form>
            </Box>
        </ThemeProvider>
    );
};
