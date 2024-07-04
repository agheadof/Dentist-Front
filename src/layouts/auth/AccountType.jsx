import React from 'react'
import './AccountType.css';
import Box from '@mui/material/Box'
import image from '../../Assets/AccountTypeCover.jpeg'
import vector from '../../Assets/Vector.png'
import circle from '../../Assets/button.png'
import circle2 from '../../Assets/circle.png'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';



const AccountType = () => {

    return (
        <>
            <Grid container>

                <Grid item xs={12}>
                    <Box
                        position="absolute"
                        width="100%"
                        minHeight="100vh"
                        sx={{
                            filter: " blur(2px)",
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div class="AccountType">
                        <h1>Sign in to your account </h1>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <img src={vector} style={{

                        position: "absolute",
                        left: "3.84%",
                        top: "3.63%",
                        height: '60px',
                        width: '60px'
                    }
                    } />

                </Grid>
            </Grid>
            <Grid container textAlign={'center'} style={{ position: 'absolute', top: '60%' }}>
                <Grid item xs={4} >
                    <Link to='/login' state={{ job: 'doc' }}  >

                        <IconButton display="flex" justifyContent="flex-end" >

                            <img src={circle} style={{
                                position: "relative",
                                width: '60%',
                                height: '40%',
                                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                            }
                            } />
                            <h1 style={{ position: "absolute", fontFamily: "Gloria Hallelujah", fontSize: "25px" }} >Doctor </h1>

                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={4} >
                    <Link to='/login' state={{ job: 'admin' }}  >
                        <IconButton display="flex" justifyContent="flex-center">
                            <img src={circle2} style={{
                                position: "relative",
                                width: '60%',
                                height: '40%',
                                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                            }
                            } />
                            <h1 style={{ position: "absolute", fontFamily: "Gloria Hallelujah", fontSize: "25px" }} >Admin </h1>

                        </IconButton>

                    </Link>
                </Grid>

                <Grid item xs={4}>

                    <Link to='/login' state={{ job: 'recep' }}  >
                        <IconButton display="flex" justifyContent="flex-start">
                            <img src={circle} style={{
                                position: "relative",
                                width: '60%',
                                height: '40%',
                                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                            }
                            } />
                            <h1 style={{ position: "absolute", fontFamily: "Gloria Hallelujah", fontSize: "25px" }} >Receptionist </h1>

                        </IconButton>
                    </Link>
                </Grid>
            </Grid >
        </>

    )
}

export default AccountType