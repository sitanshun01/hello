import React from 'react';
import StarBackground from './components/StarBackground';
import Envelope from './components/Envelope';

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      <StarBackground />
      <Envelope />
    </div>
  );
}

export default App;
