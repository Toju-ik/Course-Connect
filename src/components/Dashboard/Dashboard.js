// src/components/Dashboard/Dashboard.js

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import SummaryCard from './SummaryCard';
import WeeklyProgress from './WeeklyProgress';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1 }}>
                <Navbar />
                <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, bgcolor: '#FFFBEA', minHeight: '100vh' }}>
                    <Typography variant="h4" gutterBottom>Dashboard</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SummaryCard title="Task Summary" value="73" subtitle="+3% from last month" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <SummaryCard title="Your Next Class" value="9 AM" subtitle="Data Structures: E125" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <SummaryCard title="My Courses" value="5" subtitle="+3% from last month" />
                        </Grid>
                    </Grid>
                    <WeeklyProgress />
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
