// src/components/Dashboard/Sidebar.js

import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Typography, Tooltip } from '@mui/material';
import { Group, Event, Assignment, School, Leaderboard, Folder } from '@mui/icons-material';

const Sidebar = () => {
    const items = [
        { text: 'Study Buddy', icon: <Group />, description: 'Connect with peers and find study partners' },
        { text: 'Projects', icon: <Folder />, description: 'Manage and track your academic projects' },
        { text: 'Calendar', icon: <Event />, description: 'View and organize your academic schedule' },
        { text: 'Tasks', icon: <Assignment />, description: 'Keep track of your tasks and assignments' },
        { text: 'Courses', icon: <School />, description: 'Access your enrolled courses and materials' },
        { text: 'Leaderboard', icon: <Leaderboard />, description: 'See how you rank among your peers' },
        { text: 'Resources', icon: <Folder />, description: 'Access study materials and other resources' },
    ];

    return (
        <Box sx={{ width: { xs: '100%', md: '20%' }, bgcolor: '#f4f4f9', p: 2, height: '100vh', boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Navigation</Typography>
            <List>
                {items.map((item, index) => (
                    <Tooltip key={index} title={item.description} arrow>
                        <ListItem button sx={{ mb: 1, '&:hover': { bgcolor: '#e0f7fa' } }}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;

