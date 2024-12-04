// src/components/Dashboard/WeeklyProgress.js

import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const WeeklyProgress = () => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Weekly Progress
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ width: '48%', bgcolor: '#f9f9f9', p: 2 }}>Assignments Assigned</Box>
                <Box sx={{ width: '48%', bgcolor: '#f9f9f9', p: 2 }}>Completion Rate</Box>
            </Box>
        </Box>
    );
};

export default WeeklyProgress;
