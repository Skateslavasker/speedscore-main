//AddRoundDialog.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import RoundFormDialog from './RoundsFormDialog'; 
import '../styles/AddRoundModal.css';

// AddRoundModal component renders a modal dialog for adding or editing a round
function AddRoundModal({ open, onClose, editingRound }) {

  // If the modal is not open, do not render anything
  if (!open) return null;

  // React Portal to render the modal outside the main DOM hierarchy
  return ReactDOM.createPortal(
    <div className="modal-backdrop0" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <RoundFormDialog 
          onClose={onClose}
          editingRound={editingRound} 
          open={open}
        />
      </div>
    </div>,
    document.body // Specifies that the modal should be rendered at the end of the <body>
  );
}
export default AddRoundModal;
