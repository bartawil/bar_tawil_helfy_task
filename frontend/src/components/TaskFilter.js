/**
 * TaskFilter component - Filter buttons for task status
 */
import React from 'react';

function TaskFilter({ currentFilter, onChange }) {
  const filters = [
    { key: 'all', label: 'All Tasks' },
    { key: 'pending', label: 'In Progress' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => onChange(filter.key)}
            className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TaskFilter;
