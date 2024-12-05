// src/components/SplashScreen.js

import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish(); // Call the callback after 3 seconds
        }, 3000);
        return () => clearTimeout(timer); // Cleanup the timer
    }, [onFinish]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                bgcolor: '#98FF98',
            }}
        >
            <img
                src={`${process.env.PUBLIC_URL}/logo192.png`}
                alt="CourseConnect Logo"
                style={{ width: '100px', height: '100px', marginBottom: '16px' }}
            />
            <Typography variant="h4" color="white" gutterBottom>
                CourseConnect
            </Typography>
            <Typography variant="subtitle1" color="white">
                Your academic companion.
            </Typography>
        </Box>
    );
};

export default SplashScreen;
