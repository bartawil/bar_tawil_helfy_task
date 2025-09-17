/**
 * Express server - Main entry point with middleware and routes
 */
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Custom middleware
const logger = require('./middleware/logger');
app.use(logger);

const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

// Error handler must be last
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});