import * as React from 'react';
import { useFormik } from "formik";
import { Avatar, Box, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import DrButton from '../../components/DrButton'

export default function EditPatient({ patient, setCurrentTarget, onUpdatePatient }) {
    const formik = useFormik({
        initialValues: {
            ...patient,
        },
        onSubmit: (values) => {
            console.log("تم تحديث البيانات", values);
            onUpdatePatient(values);
            setCurrentTarget('home');
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
                        <Typography component={'h2'} variant='h6' sx={{ bgcolor: '#2D9596', color: 'white', width: '180px', textAlign: 'center' }}>Edit Patient Info</Typography>
                        <Divider sx={{ borderWidth: '1px', borderColor: 'black' }}></Divider>
                        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                            <Grid container columnGap={20} rowGap={3}>
                                <Grid item xs={4}>
                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        variant='standard'
                                        fullWidth
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        value={formik.values.lastName}
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


                            <Box style={{ display: 'flex', justifyContent: 'end' }}>
                                <DrButton type={'submit'} style={{ width: '15%' }} size={'large'}>Update</DrButton>
                                <DrButton onClick={() => setCurrentTarget('home')} style={{ width: '15%', marginRight: '10px' }} size={'large'}>Cancel</DrButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}