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


export default function AddLaboratory({ ...props  }) {
    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination
    let setCurrentTarget = props.setCurrentTarget
    let setPatient = props.setPatient
    let LaboratoryArray= LaboratoryArray
    let currentTarget = props.currentTarget
    
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const LaboratoryFormik = useFormik({

        initialValues: {
            laboratory: '',
            date: '',
            
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
                                                 boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Laboratory</Typography>

                                                <TextField
                                                    variant='standard'
                                                    fullWidth
                                                    id="doctor"
                                                    name="doctor"
                                                    sx={{ width: '200px' }}
                                                   
                                                    value={LaboratoryFormik.values.laboratory}
                                                    onChange={LaboratoryFormik.handleChange}
                                                >
                                                 {LaboratoryArray.map((item) => {
                                                 <MenuItem value={'item'}>{item}</MenuItem>
                                                 })
                                            
                                            }
                                                    
                                                </TextField>
                                            </Stack>


                                            <Stack direction={'row'} spacing={2}>

                                                <Typography sx={{ py: 1, bgcolor: 'lightgray', color: 'black', textAlign: 'center',
                                                 boxShadow: '3px 3px 5px gray', width: '50%', height: '50%', }}>Date</Typography>
                                                <TextField
                                                    sx={{ width: '200px' }}
                                                    variant='standard'
                                                    fullWidth
                                                    id="date"
                                                    name="date"
                                                    type='date'
                                                    value={LaboratoryFormik.values.date}
                                                    onChange={LaboratoryFormik.handleChange}
                                                >
                                                </TextField>
                                            </Stack>
                                           
                                        </Stack>
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ display: 'flex' ,justifyContent:"center"}}>
                                  <DrButton size={'large'} style={{ margin: '5px', width: '30%' }} onClick={() => setCurrentTarget("finance")} >OK</DrButton>
                                    <DrButton size={'large'} style={{ margin: '5px', width: '30%' }} onClick={() => setCurrentTarget("finance")}>Cancle</DrButton>
                                    <DrButton size={'large'} style={{ margin: '5px', width: '60%' }}  onClick={() => setCurrentTarget("laboratory")} >+ Add new laboratory</DrButton>
                                  
                                </CardActions>
                            </Card>

                        </Modal>
                        </Box>
        </>
    )
}