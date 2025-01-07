// index.js (example)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // or RoundsMode, etc.
import './index.css';

const rootDiv = document.getElementById('rounds-react-root');
if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(<App />); 
}
