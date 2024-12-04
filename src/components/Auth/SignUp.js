/// src/components/Auth/SignUp.js

import React, { useState } from 'react';
import { TextField, Button, Typography, Divider, Card, Box } from '@mui/material';
import { Google, GitHub, Facebook } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'; // Axios instance

const SignUp = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        studentId: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }
        try {
            const response = await api.post('/auth/register', {
                studentId: formData.studentId,
                email: formData.email,
                password: formData.password,
            });
            localStorage.setItem('token', response.data.token); // Store JWT token
            navigate('/dashboard'); // Redirect to dashboard
        } catch (err) {
            setError(err.response?.data?.msg || 'Sign-up failed'); // Display error
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
            <Card sx={{ maxWidth: 400, padding: 4, boxShadow: 3 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Create an Account
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
                    To get started, please sign up with your college email.
                </Typography>
                
                {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}
                
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Student ID"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                        helperText="Your student ID (e.g., B00147691)"
                    />
                    <TextField
                        label="College Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                        helperText="Use your college email address"
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
                    <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
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
                        Sign Up
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
                    Already have an account? <a href="/signin" style={{ color: theme.palette.primary.main }}>Sign in</a>
                </Typography>
            </Card>
        </Box>
    );
};

export default SignUp;
