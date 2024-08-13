import * as React from 'react';
import DrButton from '../../components/DrButton'
import { DeleteOutlineOutlined, EditNoteOutlined } from '@mui/icons-material';

import {
    DataGrid,
    gridClasses,
} from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/material/styles';

import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';


export default function Tratment({ ...props }) {
    let theme = props.theme
    let customToolbar = props.customToolbar
    let CustomPagination = props.CustomPagination
    let setCurrentTarget = props.setCurrentTarget
    let setPatient = props.setPatient
    let handlePrev = props.handlePrev
    let currentTarget = props.currentTarget




    const PAGE_SIZE = 5
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });
    const [tooth, setTooth] = React.useState('');
    const [treatment, setTreatment] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [note, setNote] = React.useState('');

    const handleToothChange = (event) => {
        setTooth(event.target.value);
    };

    const handleTreatmentChange = (event) => {
        setTreatment(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{  margin:15, border: '1px solid #ccc', borderRadius: 2,width:"80%" ,bgcolor:"white" }}>
                <Typography variant="h6" gutterBottom sx={{ bgcolor: "#2D9596", textAlign: "center", color: "white", width: "100%" }}>
                    Add Treatment
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} sx={{margin:4}}>
                        <Grid item xs={5}>
                            <TextField
                                label="Tooth"
                                value={tooth}
                                onChange={handleToothChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Treatment</InputLabel>
                                <Select
                                    value={treatment}
                                    onChange={handleTreatmentChange}
                                    label="Treatment"
                                >
                                    <MenuItem value="filling">Filling</MenuItem>
                                    <MenuItem value="extraction">Extraction</MenuItem>
                                    <MenuItem value="cleaning">Cleaning</MenuItem>
                                    {/* Add more treatment options as needed */}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={5}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Status</InputLabel>
                                <Select
                                    value={status}
                                    onChange={handleStatusChange}
                                    label="Status"
                                >
                                    <MenuItem value="pending">Pending</MenuItem>
                                    <MenuItem value="completed">Completed</MenuItem>
                                    <MenuItem value="canceled">Canceled</MenuItem>
                                    {/* Add more status options as needed */}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={5}>

                            <TextField
                                label="Note"
                                value={note}
                                onChange={handleNoteChange}
                                multiline
                                rows={4}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                    </Grid>



                 
                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' ,width:"100%" ,padding:2 }}>
                <DrButton size={'small'} style={{ margin: '5px' }} type='submit'>OK</DrButton>
                <DrButton size={'small'} style={{ margin: '5px' }} onClick={() => setCurrentTarget("view")}>Cancel</DrButton>

            </Box>
           
                </form>
            </Box>
        </ThemeProvider>
    );
};
