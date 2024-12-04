// src/components/Dashboard/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, Button, Tooltip } from '@mui/material';
import { Search, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: '#98FF98' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Tooltip title="Go to the Dashboard" arrow>
                    <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
                        CourseConnect
                    </Typography>
                </Tooltip>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="View your dashboard" arrow>
                        <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
                    </Tooltip>
                    <Tooltip title="View and manage tasks" arrow>
                        <Button color="inherit" onClick={() => navigate('/tasks')}>Tasks</Button>
                    </Tooltip>
                    <Tooltip title="Search for users or content" arrow>
                        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f4f4f9', borderRadius: '4px', px: 2, mx: 2 }}>
                            <Search sx={{ mr: 1 }} />
                            <InputBase placeholder="Search for a user" />
                        </Box>
                    </Tooltip>
                    {token && (
                        <>
                            <Tooltip title="Sign out of your account" arrow>
                                <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
                            </Tooltip>
                            <Tooltip title="View your profile" arrow>
                                <IconButton sx={{ ml: 2 }}>
                                    <AccountCircle />
                                </IconButton>
                            </Tooltip>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

