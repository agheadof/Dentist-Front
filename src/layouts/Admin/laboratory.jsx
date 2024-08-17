import * as React from 'react';
import DrButton from '../../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';
import {
    Avatar, Box, Typography, Grid, Button,
    Collapse,
    List,
    ListItem,
    ListItemText,

} from '@mui/material';
import { useFormik } from "formik";

import Modal from '@mui/material/Modal';
import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';
import { Card, CardActions, CardContent, CardHeader, MenuItem, Stack, TextField } from '@mui/material';

import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


export default function Laboratory({ ...props }) {
    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination
    let setCurrentTarget = props.setCurrentTarget
   // let LaboratoryArray= LaboratoryArray
    
    let currentTarget = props.currentTarget
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const  handelOK=()=> {
  //  LaboratoryArray.push(LaboratoryFormik.laboratory);
    
  } ;

    const LaboratoryFormik = useFormik({

        initialValues: {
            laboratory: '',
            phone1: '',
            phone2: '',
            phone3: '',
            address: '',
           
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return(
        <>
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            open={open}
                            onClose={handleClose}
                        >
                            <Card fullWidth>
                                
                                <CardContent>
                                    <Box component="form" onSubmit={LaboratoryFormik.handleSubmit} >
                                        <Stack direction={'column'} spacing={2}>

                                            <Stack direction={'row'} spacing={2}>
                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center',
                                                 boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Laboratory Name</Typography>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="doctor"
                                                    name="doctor"
                                                    sx={{ width: '200px' }}
                                                    
                                                    value={LaboratoryFormik.values.laboratory}
                                                    onChange={LaboratoryFormik.handleChange}
                                                    disabled
                                                >
                                                   
                                                </TextField>
                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center',
                                                 boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Phone1</Typography>
                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                    fullWidth
                                                    id="date"
                                                    name="date"
                                                    type='number'
                                                    value={LaboratoryFormik.values.phone1}
                                                    onChange={LaboratoryFormik.handleChange}
                                                    disabled
                                                >
                                                </TextField>
                                            </Stack>


                                            <Stack direction={'row'} spacing={2}>

                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center',
                                                 boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Phone2</Typography>
                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                    fullWidth
                                                    id="date"
                                                    name="date"
                                                    type='number'
                                                    value={LaboratoryFormik.values.phone2}
                                                    onChange={LaboratoryFormik.handleChange}
                                                    disabled
                                                >
                                                </TextField>
                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center',
                                                 boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Phone3</Typography>
                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                    fullWidth
                                                    id="date"
                                                    name="date"
                                                    type='number'
                                                    value={LaboratoryFormik.values.phone3}
                                                    onChange={LaboratoryFormik.handleChange}
                                                    disabled
                                                >
                                                </TextField>
                                            </Stack>
                                            <Stack direction={'row'} spacing={2}>

                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center',
                                                 boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Address</Typography>

                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                   
                                                    fullWidth
                                                    id="time"
                                                    name="time"
                                                    
                                                    value={LaboratoryFormik.values.address}
                                                    onChange={LaboratoryFormik.handleChange}
                                                    disabled
                                                >
                                                   
                                                </TextField>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </CardContent>
                                
                                <CardActions sx={{ display: 'flex' }}>
                                   <DrButton size={'large'} style={{ margin: '5px', width: '30%', marginRight: '40%' }} onClick={handelOK()} >OK</DrButton>
                                   <DrButton size={'large'} style={{ margin: '5px', width: '30%' }} onClick={() => setCurrentTarget("finance")}>Cancle</DrButton>
                                    </CardActions>
                            </Card>

                        </Modal>
                        </Box>
        </>
    )
}