/**
 * TaskForm component - Form for creating new tasks
 */
import React, { useState } from 'react';
import '../styles/TaskForm.css';

function TaskForm({ onAdd, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, description, priority });

    // Reset form fields
    setTitle('');
    setDescription('');
    setPriority('medium');
    
    // Close modal after successful add
    if (onClose) {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="task-form-grid">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            placeholder="Enter task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Priority</label>
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
