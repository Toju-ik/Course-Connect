// src/components/Auth/SignIn.js

import React, { useState } from 'react';
import { TextField, Button, Typography, Divider, Card, Box } from '@mui/material';
import { Google, GitHub, Facebook } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'; // Axios instance

const SignIn = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', {
                email: formData.email,
                password: formData.password,
            });
            localStorage.setItem('token', response.data.token); // Store JWT token
            navigate('/dashboard'); // Redirect to dashboard
        } catch (err) {
            setError(err.response?.data?.msg || 'Login failed'); // Display error
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
            <Card sx={{ maxWidth: 400, padding: 4, boxShadow: 3 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Welcome Back
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
                    Log in to continue
                </Typography>
                
                {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}
                
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="College Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </form>

                <Divider sx={{ my: 2 }}>Or continue with</Divider>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<Google />}
                        sx={{
                            mx: 1,
                            color: theme.palette.accent.main,
                            borderColor: theme.palette.accent.main,
                            '&:hover': {
                                backgroundColor: theme.palette.accent.main,
                                color: '#fff',
                            },
                        }}
                    >
                        Google
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<GitHub />}
                        sx={{
                            mx: 1,
                            color: theme.palette.accent.main,
                            borderColor: theme.palette.accent.main,
                            '&:hover': {
                                backgroundColor: theme.palette.accent.main,
                                color: '#fff',
                            },
                        }}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<Facebook />}
                        sx={{
                            mx: 1,
                            color: theme.palette.accent.main,
                            borderColor: theme.palette.accent.main,
                            '&:hover': {
                                backgroundColor: theme.palette.accent.main,
                                color: '#fff',
                            },
                        }}
                    >
                        Facebook
                    </Button>
                </Box>

                <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 3 }}>
                    Don’t have an account? <a href="/signup" style={{ color: theme.palette.primary.main }}>Create an account</a>
                </Typography>
            </Card>
        </Box>
    );
};

export default SignIn;
