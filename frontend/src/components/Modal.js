/**
 * Modal component - Generic reusable modal with backdrop
 */
import React from 'react';
import '../styles/Modal.css';

function Modal({ isOpen, onClose, children, title }) {
  if (!isOpen) return null;

  // Close modal when clicking outside content area
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;