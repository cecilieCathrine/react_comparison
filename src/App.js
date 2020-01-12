import React from 'react';
import logo from './logo.svg';
import './App.css';
import WhereToGo from "./components/WhereToGo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <WhereToGo msg="Where to go?" />
    </div>
  );
}

export default App;
