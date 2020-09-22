import React from 'react';
import './App.css';
import reactLogo from './images/react-logo.png';
import SynthesiserContainer from './Container/SynthesiserContainer';

function App() {
  
  return (
    <div className="App">
      <div id="main-header">
        <img src={reactLogo} alt="react-logo" id="react-logo"/>
        <h1 id="main-heading">Synth.</h1>
      </div>
      <SynthesiserContainer/>
    </div>
  );
}

export default App;
