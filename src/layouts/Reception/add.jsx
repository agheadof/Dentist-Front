import * as React from 'react';
import { useFormik } from "formik";
import { addPatient } from '../../Api/receptionApi';
import { Avatar, Box, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import DrButton from '../../components/DrButton'
import fakeData from './fakeData.json';

export default function Add() {
    const formik = useFormik({
        initialValues: {
            ...fakeData.patients[0],
            doctor: 'Maher',
            date: '2023-04-20',
            time: '10:20 am',
        },
        onSubmit: (values) => {
            addPatient(values)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    });
    return (
        <>
            <Grid container>
                <Grid item xs={false} sm={2} md={2}>
                    <Avatar variant='rounded' sx={{ width: { xs: '0', sm: '0', lg: '150px' }, height: { xs: '0', sm: '0', lg: '150px' }, mt: 10, mr: 3 }} />
                </Grid>
                <Grid item xs={12} sm={10} md={10}>
                    <Box fullwidth sx={{ mt: 5, }}>
                        <Typography component={'h2'} variant='h6' sx={{ bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Patient info</Typography>
                        <Divider sx={{ borderWidth: '1px', borderColor: 'black' }}></Divider>
                        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                            <Grid container columnGap={20} rowGap={3}>
                                <Grid item xs={4}>

                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        id="fname"
                                        name="fname"
                                        label="First Name"
                                        value={formik.values.fname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item xs={4}>

                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        id="lname"
                                        name="lname"
                                        label="Last Name"
                                        value={formik.values.lname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item xs={4}>

                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        id="phone"
                                        name="phone"
                                        label="Phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item xs={4}>

                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        type='date'
                                        id="birthdate"
                                        name="birthdate"
                                        helperText='Birth Date'
                                        value={formik.values.birthdate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item xs={4}>

                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        id="address"
                                        name="address"
                                        label="Address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        id="sex"
                                        name="sex"

                                        label='Sex'
                                        select
                                        value={formik.values.sex}
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value={'Male'}>Male</MenuItem>
                                        <MenuItem value={'Female'}>Female</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Typography component={'h2'} variant='h6' sx={{ mt: 8, bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Date info</Typography>
                            <Divider sx={{ borderWidth: '1px', borderColor: 'black' }}></Divider>
                            <Grid container columnGap={3} rowGap={5} sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                                <Grid item xs={2}>
                                    <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', width: '100%', textAlign: 'center', boxShadow: '3px 3px 5px gray' }}>Doctor</Typography>
                                </Grid>
                                <Grid item xs={8}>

                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        id="doctor"
                                        name="doctor"
                                        sx={{ width: '200px' }}
                                        select
                                        value={formik.values.doctor}
                                        onChange={formik.handleChange}
                                    >
                                        {fakeData.doctors.map((doctor) => (
                                            <MenuItem key={doctor.value} value={doctor.value}>{doctor.label}</MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', width: '100%', textAlign: 'center', boxShadow: '3px 3px 5px gray' }}>Date</Typography>
                                </Grid>
                                <Grid item xs={8}>

                                    <TextField
                                        sx={{ width: '200px' }}
                                        variant='standard'
                                        fullWidth
                                        id="date"
                                        name="date"
                                        type='date'
                                        value={formik.values.date}
                                        onChange={formik.handleChange}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', width: '100%', textAlign: 'center', boxShadow: '3px 3px 5px gray' }}>Time</Typography>
                                </Grid>
                                <Grid item xs={7} >

                                    <TextField
                                        sx={{ width: '200px' }}
                                        variant='standard'
                                        fullWidth
                                        id="time"
                                        name="time"
                                        type='time'
                                        select
                                        value={formik.values.time}
                                        onChange={formik.handleChange}
                                    >
                                        {fakeData.appointmentTimes.map((time) => (
                                            <MenuItem key={time.value} value={time.value}>{time.label}</MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                            </Grid>
                            <Box style={{ display: 'flex', justifyContent: 'end' }}>
                                <DrButton type={'submit'} style={{ width: '15%' }} size={'large'}>Add</DrButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}