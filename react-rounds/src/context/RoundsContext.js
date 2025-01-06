// RoundsContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { roundsReducer, initialRoundsState } from '../components/RoundsReducer';

const RoundsContext = createContext(null);

export function useRoundsContext() {
  return useContext(RoundsContext);
}

export function RoundsProvider({ children }) {
  const [state, dispatch] = useReducer(roundsReducer, initialRoundsState);

  // Optionally load initial data from localStorage (replicating the vanilla JS approach)
  useEffect(() => {
    const savedData = localStorage.getItem('speedgolf-user-data');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      dispatch({ type: 'LOAD_FROM_STORAGE', payload: parsed });
    }
  }, []);

  // Optionally persist to localStorage whenever rounds change
  useEffect(() => {
    localStorage.setItem('speedgolf-user-data', JSON.stringify(state));
  }, [state]);

  return (
    <RoundsContext.Provider value={{ state, dispatch }}>
      {children}
    </RoundsContext.Provider>
  );
}
