import React from 'react';
import './App.css';
import Hooks from  './hooks/startHooks'
import Parent from './test/checkPureCp/parent'

function App() {
  return (
    <div className="App">
      <Hooks></Hooks>
      <Parent></Parent>
    </div>
  );
}

export default App;
