import React from 'react';
import { Button } from '@mui/joy';

const DrButton = ({ children, style, onClick }) => {
    return (
        <Button sx={{ bgcolor: "#2D9596", mt: 3, mb: 2, ":hover": { bgcolor: "gray" } }} onClick={onClick}>
            {children}
        </Button>
    );
};

export default DrButton;