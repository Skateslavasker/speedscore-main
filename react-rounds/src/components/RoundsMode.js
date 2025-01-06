// RoundsMode.js
import React, { useState } from 'react';
import RoundTable from './RoundsTable';
import AddRoundModal from './AddRoundDialog';

function RoundsMode() {
  // State to control the visibility of the Add/Edit Round dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  // State to hold the round data being edited; null indicates adding a new round
  const [editingRound, setEditingRound] = useState(null);
    // Handler to open the dialog for adding a new round
  function handleNewRound() {
    setEditingRound(null); // No round is being edited
    setDialogOpen(true);  // Open the dialog
  }

  // Handler to open the dialog for editing an existing round
  function handleEditRound(round) {
    setEditingRound(round);  // Set the round to be edited
    setDialogOpen(true);    // Open the dialog
  }

   // Handler to close the Add/Edit Round dialog
  function closeDialog() {
    setDialogOpen(false);   // Close the dialog
    setEditingRound(null); // Reset the editing round state
  }

  return (
    <div className="rounds-container">
      
      <h1 className="rounds-header">Rounds</h1>
      {/* Render the RoundTable component, passing the edit handler as a prop */}
      <RoundTable onEditRound={handleEditRound} />

    
      <button
        id="newRoundFAB"
        className="float-btn alt-fab"
        onClick={handleNewRound}
      >
        <span className="fas fa-calendar-plus fa-fw" aria-hidden="true" />
        &nbsp;New Round
      </button>

      {dialogOpen && (
        <AddRoundModal
          open={dialogOpen}
          onClose={closeDialog}
          editingRound={editingRound}
        />
      )}
    </div>
  );
}

export default RoundsMode;
