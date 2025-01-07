// RoundTable.js
import React from 'react';
import { useRoundsContext } from '../context/RoundsContext';
import RoundTableRow from './RoundsTableRow';

// RoundTable component receives 'onEditRound' for handling edit actions
function RoundTable({ onEditRound }) {
  const { state } = useRoundsContext();  // Accessing the global rounds state from context
  const { rounds } = state;

  return (
    <table id="roundsTable" className="table table-hover">
      <caption id="roundsTableCaption" aria-live="polite">
        {rounds.length === 0
          ? 'No rounds to display.'
          : `Table displaying ${rounds.length} speedgolf round(s)`}
      </caption>
      <thead className="table-light">
        <tr>
          <th scope="col" className="cell-align-middle">
            Date
          </th>
          <th scope="col" className="cell-align-middle">
            Course
          </th>
          <th scope="col" className="cell-align-middle">
            Score
          </th>
          <th scope="col" className="cell-align-middle">
            View/Edit...
          </th>
          <th scope="col" className="cell-align-middle">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {rounds.length === 0 ? (
          <tr>
            <td colSpan="5">
              <i>No rounds added yet</i>
            </td>
          </tr>
        ) : (
          rounds.map((round) => (
            <RoundTableRow
              key={round.roundNum}
              round={round}
              onEditRound={onEditRound}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default RoundTable;
