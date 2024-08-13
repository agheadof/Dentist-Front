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
export default function UserEmployee({ ...props }) {
    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination
    let setCurrentTarget = props.setCurrentTarget
    let setPatient = props.setPatient
    let handlePrev = props.handlePrev
    let currentTarget = props.currentTarget
    let patient = props.patient



    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });
   
    // const [Patient_Name, setPatient_Name] = React.useState('');
    // const [Sex, setSex] = React.useState('');
    // const [Age, setAge] = React.useState('');
    // const [Address, setAddress] = React.useState('');
    // const [Phone, setPhone] = React.useState('');
    // const handlePatient_NameChange = (event) => {
    //     setPatient_Name(event.target.value);
    // };

    // const handleSexChange = (event) => {
    //     setSex(event.target.value);
    // };

    // const handleAgeChange = (event) => {
    //     setAge(event.target.value);
    // };

   
    // const handleAddressChange = (event) => {
    //     setAddress(event.target.value);
    // };
    // const handlePhoneChange = (event) => {
    //     setPhone(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle form submission logic here
    // };

    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ margin: 10, mt:4,mb:0, border: '1px solid #ccc', borderRadius: 2, width: "90%", bgcolor: "white" }}>
                <Typography variant="h6" gutterBottom sx={{ bgcolor: "#2D9596", textAlign: "center", color: "white", width: "100%" }}>
                    Patient info
                </Typography>
                {/* <form {onSubmit={handleSubmit}}> */}
                <form>
                    <Grid container spacing={2} sx={{ margin: 4 }}>
                        <Grid item xs={5}>
                            <TextField
                                label="First Name"
                                value={patient.firstName}
                                // onChange={handlePatient_NameChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Last Name"
                                value={patient.lastName}
                                // onChange={handlePatient_NameChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Birth Date"
                                value={patient.date}
                                // onChange={handleSexChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                       
                        <Grid item xs={5}>
                            <TextField
                                label="Sex"
                                value={patient.sex}
                                // onChange={handleSexChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                       
                        <Grid item xs={5}>
                            <TextField
                                label="Phone"
                                type='phone'
                                value={patient.phone}
                                // onChange={handlePhoneChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Address"
                                value={patient.address}
                                // onChange={handleAddressChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Email"
                               
                                value={patient.email}
                                // onChange={handleAgeChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="ID"
                               
                                value={patient.id}
                                // onChange={handleAgeChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Salary"
                               
                                value={patient.salary}
                                // onChange={handleAgeChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Job Title"
                               
                                value={patient.type}
                                // onChange={handleAgeChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </Grid>
                        

                    </Grid>




                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: "100%", padding: 2 }}>
                        <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => setCurrentTarget("")}>Pay</DrButton>
                        <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => setCurrentTarget("")}>old Payment</DrButton>

                    </Box>

                </form>
            </Box>
        </ThemeProvider>
    );
};
