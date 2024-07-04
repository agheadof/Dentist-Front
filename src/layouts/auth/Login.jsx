import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import image from '../../Assets/login.jpg'
import vector from '../../Assets/Vector.png'

import { useLocation } from 'react-router-dom';


const Login = () => {

    const location = useLocation();
    let job = ""
    try {
        if (location.state.job) {
            job = location.state.job
        }
        console.log(job)
    }
    catch {
        console.error(" job value is null")
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

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


                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" sx={{ color: "#2D9596" }} />}
                                label="Remember me"
                            />
                            <Button

                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: "#2D9596", mt: 3, mb: 2, ":hover": { bgcolor: "gray" } }}
                            >
                                Sign In
                            </Button>

                            <Link to="/forgot" state={{ job }} color={"#2D9596"} textAlign={"center"}>
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