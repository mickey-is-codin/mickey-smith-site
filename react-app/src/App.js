import React from 'react';
import './index.css';
import './App.css';

import Particles from 'react-particles-js';
import particleOpts from './particle-options.js';

function App() {
  return (
    <div>
      <Mickey/>
      <Particles
        params={particleOpts}
      />
    </div>
  );
}

function Mickey(props) {
  return (

  );
}

export default App;
