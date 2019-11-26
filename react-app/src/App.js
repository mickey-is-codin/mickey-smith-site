import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Particles from 'react-particles-js';
import particleOpts from './particle-options.js';

function App() {
  return (
    <Particles
      params={particleOpts}
    />
  );
}

export default App;
