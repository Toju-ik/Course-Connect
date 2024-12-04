// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <nav>
                    <Link to="/signup">Sign Up</Link> | <Link to="/signin">Sign In</Link> | <Link to="/dashboard">Dashboard</Link>
                </nav>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
