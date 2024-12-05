// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#98FF98', // Mint Green
        },
        secondary: {
            main: '#F4DECB', // Sand
        },
        background: {
            default: '#FFFBEA', // Cream White
        },
        accent: {
            main: '#008080', // Teal
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif', // You can change this to a preferred font
    },
});

export default theme;
