import React from 'react';
import './App.css';
import EventForm from './components/EventForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Event</h1>
      </header>
      <main>
        <EventForm />
      </main>
    </div>
  );
}

export default App;
