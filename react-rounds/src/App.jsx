// App.js
import React from 'react';
import { RoundsProvider } from '../src/context/RoundsContext';
import RoundsMode from '../src/components/RoundsMode';
import '../src/styles/style.css';


function App() {
  return (
    <RoundsProvider>
      <RoundsMode />
    </RoundsProvider>
  );
}

export default App;
