// RoundsReducer.js

// Initial state for the rounds reducer
export const initialRoundsState = {
    rounds: [],   // Array to hold all round entries
    roundCount: 0,  // Counter to keep track of the number of rounds
    lastUpdatedMsg: '', // Message to display the last update action
  };
  
  // Reducer function to manage the state based on dispatched actions
  export function roundsReducer(state, action) {
    switch (action.type) {
      case 'LOAD_FROM_STORAGE': {
        return {
          ...state,  // Spread existing state
          ...action.payload,    // Overwrite with payload data
        };
      }
      case 'ADD_ROUND': {
        const newRoundCount = state.roundCount + 1; //Increment count
        const newRound = {
          ...action.payload,    // Spread payload data
          roundNum: newRoundCount,
        };
        return {
          ...state,
          roundCount: newRoundCount,
          rounds: [newRound, ...state.rounds],
          lastUpdatedMsg: 'New Round Logged!',
        };
      }
      case 'UPDATE_ROUND': {
        const updatedRounds = state.rounds.map((r) =>
          r.roundNum === action.payload.roundNum ? { ...action.payload } : r  // Replace the matching round with updated data
        );
        return {
          ...state,
          rounds: updatedRounds,
          lastUpdatedMsg: 'Round Updated!',
        };
      }
      case 'DELETE_ROUND': {
        const filteredRounds = state.rounds.filter(
          (r) => r.roundNum !== action.payload.roundNum  // Remove the round with the specified round number
        );
        return {
          ...state,
          rounds: filteredRounds,
          lastUpdatedMsg: 'Round Deleted!',
        };
      }
         // Return the current state for any unhandled action types
      default:
        return state;
    }
  }
  