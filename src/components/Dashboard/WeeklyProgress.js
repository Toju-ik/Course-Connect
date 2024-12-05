import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CampusMap from '../CampusMap'; // Import the CampusMap component

const WeeklyProgress = () => {
    return (
        <Box
            sx={{
                mt: 4,
                position: 'relative', 
                height: '50vh', 
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Weekly Progress Content */}
            <Box
                sx={{
                    zIndex: 1, 
                    bgcolor: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: 1,
                    p: 2,
                    backdropFilter: 'blur(4px)', 
                    mb: 2, 
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Weekly Progress
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box
                        sx={{
                            width: '48%',
                            bgcolor: 'rgba(255, 255, 255, 0.7)',
                            p: 2,
                            borderRadius: 1,
                            backdropFilter: 'blur(4px)',
                        }}
                    >
                        Assignments Assigned
                    </Box>
                    <Box
                        sx={{
                            width: '48%',
                            bgcolor: 'rgba(255, 255, 255, 0.7)',
                            p: 2,
                            borderRadius: 1,
                            backdropFilter: 'blur(4px)',
                        }}
                    >
                        Completion Rate
                    </Box>
                </Box>
            </Box>

            {/* Map Background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '30%', 
                    left: 0,
                    right: 0,
                    bottom: 0, 
                    zIndex: 0, 
                }}
            >
                <CampusMap />
            </Box>
        </Box>
    );
};

export default WeeklyProgress;



