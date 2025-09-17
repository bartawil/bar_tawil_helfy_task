/**
 * Task API Routes - CRUD operations for task management
 */
const express = require('express');
const router = express.Router();
let tasks = require('../db/tasks_collection');
const { validateTaskCreation, validateTaskUpdate } = require('../middleware/validateTask');

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST new task
router.post('/', validateTaskCreation, (req, res) => {
  const { title, description, priority } = req.body;

  const newTask = {
    id: Date.now(), // Generate unique ID using timestamp
    title,
    description: description || '',
    completed: false, // New tasks start as incomplete
    createdAt: new Date(),
    priority: priority || 'medium', // Default priority
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update task
router.put('/:id', validateTaskUpdate, (req, res) => {
  const { id } = req.params;
  const { title, description, priority, completed } = req.body;

  const idx = tasks.findIndex(t => String(t.id) === String(id));
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });

  // Update only provided fields
  if (title !== undefined) tasks[idx].title = title;
  if (description !== undefined) tasks[idx].description = description;
  if (priority !== undefined) tasks[idx].priority = priority;
  if (completed !== undefined) tasks[idx].completed = completed;

  res.json(tasks[idx]);
});

// DELETE task
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const idx = tasks.findIndex(t => String(t.id) === String(id));
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });

  const deleted = tasks.splice(idx, 1)[0];
  res.json(deleted);
});

// PATCH toggle completion status
router.patch('/:id/toggle', (req, res) => {
  const { id } = req.params;

  const idx = tasks.findIndex(t => String(t.id) === String(id));
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });

  tasks[idx].completed = !tasks[idx].completed;
  res.json(tasks[idx]);
});

module.exports = router;
