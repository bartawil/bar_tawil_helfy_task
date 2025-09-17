/**
 * Task validation and sanitization middleware
 */

// Common sanitize function
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input.trim().replace(/<[^>]*>/g, ''); // Remove HTML tags to prevent XSS
}

// Validation for creating a new task (POST)
function validateTaskCreation(req, res, next) {
    const { title, description, priority } = req.body;

    // Sanitize inputs
    if (title !== undefined) req.body.title = sanitizeInput(title);
    if (description !== undefined) req.body.description = sanitizeInput(description);

    // Title validations (required)
    const sanitizedTitle = req.body.title;
    if (!sanitizedTitle || typeof sanitizedTitle !== 'string' || sanitizedTitle.trim() === '') {
        return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
    }
    if (sanitizedTitle.length < 1 || sanitizedTitle.length >= 100) {
        return res.status(400).json({ error: 'Title must be between 1 and 100 characters' });
    }

    // Description validations 
    const sanitizedDescription = req.body.description;
    if (sanitizedDescription !== undefined && typeof sanitizedDescription !== 'string') {
        return res.status(400).json({ error: 'Description must be a string if provided' });
    }
    if (sanitizedDescription && sanitizedDescription.length > 500) {
        return res.status(400).json({ error: 'Description must not exceed 500 characters' });
    }

    next();
}

// Validation for updating a task (PUT)
function validateTaskUpdate(req, res, next) {
    const { title, description, priority, completed } = req.body;

    // Sanitize inputs
    if (title !== undefined) req.body.title = sanitizeInput(title);
    if (description !== undefined) req.body.description = sanitizeInput(description);

    // Title validations
    const sanitizedTitle = req.body.title;
    if (sanitizedTitle !== undefined && (typeof sanitizedTitle !== 'string' || sanitizedTitle.trim() === '')) {
        return res.status(400).json({ error: 'Title must be a non-empty string if provided' });
    }
    if (sanitizedTitle && (sanitizedTitle.length < 1 || sanitizedTitle.length >= 100)) {
        return res.status(400).json({ error: 'Title must be between 1 and 100 characters' });
    }

    // Description validations
    const sanitizedDescription = req.body.description;
    if (sanitizedDescription !== undefined && typeof sanitizedDescription !== 'string') {
        return res.status(400).json({ error: 'Description must be a string if provided' });
    }
    if (sanitizedDescription && sanitizedDescription.length > 500) {
        return res.status(400).json({ error: 'Description must not exceed 500 characters' });
    }

    // Priority validations
    if (priority !== undefined && (typeof priority !== 'string' || !['low', 'medium', 'high'].includes(priority))) {
        return res.status(400).json({ error: 'Priority must be one of: low, medium, high if provided' });
    }

    // Completed validations
    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed must be a boolean if provided' });
    }

    next();
}

module.exports = { validateTaskCreation, validateTaskUpdate };
