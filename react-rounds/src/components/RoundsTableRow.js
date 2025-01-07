// RoundTableRow.js
import React from 'react';
import { useRoundsContext } from '../context/RoundsContext';

function RoundTableRow({ round, onEditRound }) {
  const { dispatch } = useRoundsContext();  // Accessing dispatch from context to manage state
   // Handler for edit button click
  const handleEditClick = () => {
    onEditRound(round);
  };
    // Handler for delete button click
  const handleDeleteClick = () => {
    // Confirm deletion with the user using confirm dialog box
    const confirmed = window.confirm(`Delete round on ${round.date}?`);
    if (confirmed) {
      // Dispatch delete action with the round number as payload
      dispatch({ type: 'DELETE_ROUND', payload: { roundNum: round.roundNum } });
    }
  };

  return (
    <tr id={`r-${round.roundNum}`}>
      <td>{round.date}</td>
      <td>{round.course}</td>
      <td>
        {round.SGS} ({round.strokes} in {round.minutes}:{round.seconds})
      </td>
      <td>
        <button aria-label="View and Edit Round" onClick={handleEditClick}>
          <span className="fas fa-eye" />
          &nbsp;
          <span className="fas fa-edit" />
        </button>
      </td>
      <td>
        <button aria-label="Delete Round" onClick={handleDeleteClick}>
          <span className="fas fa-trash" />
        </button>
      </td>
    </tr>
  );
}

export default RoundTableRow;
