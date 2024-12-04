// src/pages/Dashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token
        navigate('/signin'); // Redirect to Sign-In
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to Your Dashboard</h1>
            <p>This is a protected page for authenticated users only.</p>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#FF4C4C',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
    },
};

export default Dashboard;
