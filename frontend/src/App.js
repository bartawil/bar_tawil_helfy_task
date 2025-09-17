/**
 * Main App component - Task manager application
 */
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import Modal from './components/Modal';
import { fetchTasks, addTask, updateTask, deleteTask, toggleTask } from './services/taskService';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks()
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  // Handle task creation
  const handleAddTask = (task) => {
    addTask(task)
      .then(newTask => setTasks(prev => [...prev, newTask]))
      .catch(err => console.error(err));
  };

  // Handle task updates
  const handleUpdateTask = (id, updates) => {
    updateTask(id, updates)
      .then(updatedTask => {
        setTasks(prev =>
          prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
        );
      })
      .catch(err => console.error(err));
  };

  // Handle task deletion
  const handleDeleteTask = (id) => {
    deleteTask(id)
      .then(() => setTasks(prev => prev.filter(task => task.id !== id)))
      .catch(err => console.error(err));
  };

  // Handle completion toggle
  const handleToggleTask = (id) => {
    toggleTask(id)
      .then(updatedTask => {
        setTasks(prev =>
          prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
        );
      })
      .catch(err => console.error(err));
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // all
  });

  return (
    <div className="app">
      <div className="app-container">
        <div className="title-toolbar">
          <h1 className="app-title">Task Manager</h1>
        </div>
        <TaskFilter currentFilter={filter} onChange={setFilter} />
        <TaskList
          tasks={filteredTasks}
          allTasks={tasks}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
        {/* Floating Add Button */}
        <button 
          className="floating-add-btn"
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
        
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Create New Task"
        >
          <TaskForm 
            onAdd={handleAddTask} 
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;
