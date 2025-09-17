/**
 * ConfirmDeleteModal component - Confirmation dialog for task deletion
 */
import React from 'react';
import Modal from './Modal';

function ConfirmDeleteModal({ isOpen, onClose, onConfirm, taskTitle }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div style={{ padding: '20px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', color: '#3c3c43', marginBottom: '8px' }}>
          Are you sure you want to delete this task?
        </p>
        <p style={{ fontSize: '0.9rem', color: '#8e8e93', marginBottom: '24px', fontWeight: '500' }}>
          "{taskTitle}"
        </p>
        <p style={{ fontSize: '0.85rem', color: '#ff3b30', marginBottom: '32px' }}>
          This action cannot be undone
        </p>
        
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button 
            className="cancel-btn" 
            onClick={onClose}
            style={{ minWidth: '100px' }}
          >
            Cancel
          </button>
          <button 
            className="delete-btn" 
            onClick={onConfirm}
            style={{ minWidth: '100px' }}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDeleteModal;