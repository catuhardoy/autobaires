'use client'
import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading({message, height, width}) {

    return (
        <Box sx={{ display: 'flex', width: width || '100%', height: height || '500px', alignItems: 'center', justifyContent: 'center', gap:'20px'}}>
            <h3>{message ? message : 'Cargando información'}</h3> <CircularProgress /> 
        </Box>
    );
};

