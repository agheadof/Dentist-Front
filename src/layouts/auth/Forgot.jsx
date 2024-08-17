import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Send } from '@mui/icons-material'
import image from '../../Assets/login.jpg'
import forgot from '../../Assets/forgot.png'


const Forgot = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');

        // محاكاة نجاح إرسال البريد الإلكتروني
        console.log(`تم إرسال رسالة إعادة تعيين كلمة المرور إلى: ${email}`);

        // التنقل إلى صفحة إدخال الرمز بعد تأخير قصير لمحاكاة طلب الشبكة
        setTimeout(() => {
            navigate('/code');
        }, 100);
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


                        <img src={forgot} style={{
                            marginBottom: 2,
                            height: '50%',
                            width: '50%'
                        }
                        } />
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
                                Forgot your password?
                            </Typography>
                            <Typography sx={{ fontWeight: "bold", color: "gray" }}>
                                Enter your registered email below to receive password reset instruction
                            </Typography>
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

                            <Button
                                endIcon={<Send />}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: "#2D9596", mt: 3, mb: 2, ":hover": { bgcolor: "gray" } }}
                            >
                                Send
                            </Button>

                        </Box>

                    </Box>

                </Grid>
            </Grid>


        </>
    );
}

export default Forgot