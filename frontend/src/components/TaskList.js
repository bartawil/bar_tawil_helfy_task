/**
 * TaskList component - Carousel display for tasks with navigation
 */
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

function TaskList({ tasks = [], allTasks = [], onUpdate, onDelete, onToggle }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset carousel index when tasks change
  useEffect(() => {
    if (!tasks || tasks.length === 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prev => (prev >= tasks.length ? 0 : prev));
    }
  }, [tasks]);

  const len = tasks.length;

  // Navigate to previous task
  const handlePrev = () => {
    if (len === 0) return;
    setCurrentIndex(prev => (prev - 1 + len) % len);
  };

  // Navigate to next task
  const handleNext = () => {
    if (len === 0) return;
    setCurrentIndex(prev => (prev + 1) % len);
  };

  // Show placeholder when no tasks available
  if (len === 0) {
    return (
      <div className="single-carousel">
        <div className="carousel-placeholder">
          <div className="placeholder-content">
            {allTasks.length === 0 ? (
              <div>
                <span className="placeholder-icon">📝</span>
                <p>No tasks yet. Add your first task!</p>
              </div>
            ) : (
              <div>
                <span className="placeholder-icon">🔍</span>
                <p>No tasks match the current filter.</p>
                <small>Try changing the filter or add a new task.</small>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const currentTask = tasks[currentIndex];
  if (!currentTask) return null;

  return (
    <div className="single-carousel">
      {/* Previous button */}
      <button className="arrow left" onClick={handlePrev}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* Current task display */}
      <div className="carousel-item-wrapper">
        <TaskItem
          task={currentTask}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      </div>
      
      {/* Next button */}
      <button className="arrow right" onClick={handleNext}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default TaskList;
