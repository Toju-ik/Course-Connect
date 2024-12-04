// src/components/Dashboard/SummaryCard.js

import React from 'react';
import { Card, CardContent, Typography, Tooltip } from '@mui/material';

const SummaryCard = ({ title, value, subtitle, description }) => {
    return (
        <Tooltip title={description} arrow>
            <Card sx={{ p: 2, bgcolor: '#e0f7fa', boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="h4" sx={{ my: 1 }}>{value}</Typography>
                    <Typography variant="body2" color="textSecondary">{subtitle}</Typography>
                </CardContent>
            </Card>
        </Tooltip>
    );
};

export default SummaryCard;



