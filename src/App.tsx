import { useState } from 'react';
import StarBackground from './components/StarBackground';
import Envelope from './components/Envelope';
import LoveQuestion from './components/LoveQuestion';

function App() {
  const [page, setPage] = useState<'envelope' | 'question'>('envelope');

  return (
    <main className="app-shell">
      <StarBackground />
      {page === 'envelope' ? (
        <Envelope onOpen={() => setPage('question')} />
      ) : (
        <LoveQuestion />
      )}
    </main>
  );
}

export default App;
