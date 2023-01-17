import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Screens/login';


function App() {
  const handleSubmit = (email: string, password: string) => {
    console.log(email, password);
}

  return (
    <div className="App">
      <header className="App-header">
      <Login onSubmit={handleSubmit} />

      </header>
    </div>
  );
}

export default App;
