import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '../../Assets/login.jpg'
import reset from '../../Assets/reset.png'
import { useNavigate } from 'react-router-dom';


const Reset = () => {
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const password = data.get('password');

        // محاكاة نجاح إعادة تعيين كلمة المرور
        console.log('تم إعادة تعيين كلمة المرور بنجاح:', password);

        // التنقل إلى صفحة تسجيل الدخول بعد ثانيتين
        setTimeout(() => {
            navigate('/');
        }, 2000);
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


                        <img src={reset} style={{
                            marginBottom: 2,
                            height: '50%',
                            width: '50%'
                        }
                        } />
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Typography sx={{ fontWeight: "bold", color: "gray" }}>
                                your new password must be different from previously used password
                            </Typography>
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

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: "#2D9596", mt: 3, mb: 2, ":hover": { bgcolor: "gray" } }}
                            >
                                Create
                            </Button>

                        </Box>

                    </Box>

                </Grid>
            </Grid>


        </>
    );
}

export default Reset