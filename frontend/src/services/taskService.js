/**
 * API service for backend communication
 */
const API_URL = 'http://localhost:4000/api/tasks';

// Fetch all tasks from backend
export async function fetchTasks() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
}

// Create new task
export async function addTask(task) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error('Failed to add task');
  return res.json();
}

// Update existing task
export async function updateTask(id, updates) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });

  if (!res.ok) throw new Error('Failed to update task');
  return res.json();
}

// Delete task by ID
export async function deleteTask(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete task');
  return res.json();
}

// Toggle task completion status
export async function toggleTask(id) {
  const res = await fetch(`${API_URL}/${id}/toggle`, { method: 'PATCH' });
  if (!res.ok) throw new Error('Failed to toggle task');
  return res.json();
}

