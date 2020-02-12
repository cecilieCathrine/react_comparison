import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from "./components/News";

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <News />
      <a href="https://newsapi.org/">Powered by News Api</a> 
    </div>
  );
}

export default App;
