import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '../../Assets/login.jpg'
import vector from '../../Assets/Vector.png'

import { useLocation } from 'react-router-dom';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});



const Login = () => {
    const location = useLocation();
    let job = ""
    try {
        if (location.state.job) {
            job = location.state.job

        }

    }
    catch {
        console.error(" job value is null")
    }
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            job: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // Simulate successful login
                console.log('Login successful:', values);

                // Navigate based on job value
                switch (job) {
                    case 'reception':
                        navigate('/reception');
                        break;
                    case 'admin':
                        navigate('/admin');
                        break;
                    case 'Dr':
                        navigate('/doctor');
                        break;
                    default:
                        console.error('Unknown job');
                }
            } catch (error) {
                console.error('Login error:', error);
            }
        },
    });




    return (

        <>

            <Grid container sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={12}
                    md={12}
                    sx={{
                        filter: "blur(2px) brightness(90%)",
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                        backgroundRepeat: "no-repeat"
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square
                    sx={{ height: "90%", bgcolor: 'transparent', position: "absolute", top: "5%", right: "5%" }} >
                    <Box
                        sx={{

                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                        <img src={vector} style={{
                            marginBottom: 2,
                            height: '60px',
                            width: '60px'
                        }
                        } />

                        <Typography component="h1" variant="h5">
                            Sign in as {job == 'recep' ? "Receptionist" : job == 'doc' ? "Doctor" : "Admin"}
                        </Typography>


                        <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: "#2D9596", mt: 3, mb: 2, ":hover": { bgcolor: "gray" } }}
                            >
                                Sign In
                            </Button>

                            <Link to="/forgot" state={{ job }} color={"#2D9596"} style={{ display: 'flex', justifyContent: 'center' }}>
                                Forgot password?
                            </Link>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Login