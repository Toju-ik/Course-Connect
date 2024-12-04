// backend/server.js

const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
const cors = require('cors');
app.use(cors());


// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
