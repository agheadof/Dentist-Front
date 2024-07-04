import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Margin, Send } from '@mui/icons-material'
import image from '../../Assets/login.jpg'
import code from '../../Assets/code.png'
import OTP from '../../components/OTP';
import { useLocation } from 'react-router-dom';


const Code = () => {

    const [otp, setOtp] = React.useState('');

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
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={12}
                    sx={{
                        filter: "blur(2px) brightness(90%)",
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: "no-repeat",

                    }}
                />
                <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square={false}
                    sx={{
                        mb: "1",
                        position: "absolute", marginLeft: "auto",
                        marginRight: "auto",
                        top: "5%",
                        left: "0",
                        right: "0",
                        textAlign: "center",
                        borderRadius: 15
                    }} >
                    <Box sx={{
                        mb: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',


                    }}>


                        <img src={code} style={{
                            marginBottom: 10,
                            height: '50%',
                            width: '50%'
                        }
                        } />
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
                                Check your email
                            </Typography>
                            <Typography sx={{ fontWeight: "bold", color: "gray" }}>
                                We have sent the code to your email
                            </Typography>
                            <Box style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <OTP separator={<span>-</span>} value={otp} onChange={setOtp} length={4} />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ bgcolor: "#2D9596", mt: 3, mb: 2, ":hover": { bgcolor: "gray" } }}
                                >
                                    OK
                                </Button>
                            </Box>
                        </Box>

                    </Box>

                </Grid>
            </Grid>


        </>
    );
}

export default Code