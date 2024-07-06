import React from 'react';
import { Button } from '@mui/material';

const DrButton = ({ children, size, onClick, style, type }) => {
    return (
        <Button type={type} size={size} style={style} sx={{ bgcolor: "#2D9596", mt: 3, mb: 2, ":hover": { bgcolor: "gray" }, color: 'white' }} onClick={onClick}>
            {children}
        </Button>
    );
};

export default DrButton;