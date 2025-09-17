/**
 * TaskItem component - Individual task display with edit/delete functionality
 */
import React, { useState } from 'react';
import Modal from './Modal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import '../styles/TaskItem.css';

function TaskItem({ task, onUpdate, onDelete, onToggle }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [priority, setPriority] = useState(task?.priority || 'medium');

  // Save task updates
  const handleSave = () => {
    onUpdate(task.id, { title, description, priority });
    setIsEditModalOpen(false);
  };

  // Open edit modal with current task values
  const handleEditClick = () => {
    // Reset form fields to current task values when opening modal
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setIsEditModalOpen(true);
  };

  // Cancel edit and reset form
  const handleCancel = () => {
    // Reset to original values
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setIsEditModalOpen(false);
  };

  // Open delete confirmation modal
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  // Confirm task deletion
  const handleConfirmDelete = () => {
    onDelete(task.id);
    setIsDeleteModalOpen(false);
  };

  // Cancel task deletion
  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const priorityText = {
    high: 'High',
    medium: 'Medium',
    low: 'Low'
  };

  return (
    <>
      <div className={`task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`}>
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          <div className="task-actions">
            <input 
              type="checkbox" 
              className="task-checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
          </div>
        </div>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        <div className="task-footer">
          <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
          <span className={`priority-badge ${task.priority}`}>
            {priorityText[task.priority]}
          </span>
          <button 
            className="edit-btn"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>

      {/* Edit Task Modal */}
      <Modal 
        isOpen={isEditModalOpen} 
        onClose={handleCancel}
        title="Edit Task"
      >
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="task-form">
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
            
            <div className="edit-actions">
              <button type="submit" className="submit-btn">Save Changes</button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        taskTitle={task.title}
      />
    </>
  );
}

export default TaskItem;
