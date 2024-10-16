import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{padding: '2rem'}}>
        <h2>Welcome to PAPI</h2>
        <p>This is the main content area of your application.</p>
      </main>
    </div>
  );
}

export default App;