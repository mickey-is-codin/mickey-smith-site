import React from 'react';
import './index.css';
import './App.css';

import Particles from 'react-particles-js';
import particleOpts from './particle-options.js';

function App() {
  return (
    <div>
      <Mickey/>
      <Background/>
    </div>
  );
}

function Mickey(props) {
  return (
    <div className="wrapper d-flex flex-column">

      <header className="page-header p-2">
      </header>

      <main className="page-meat row justify-content-around">
        <div className="page-left col-1">
        </div>
        <div className="page-main col-6">
          <h1 className="">Mickey Smith</h1>
          <p className="lead">Research Assistant at the Shirley Ryan Abilitylab</p>
        </div>
        <div className="page-right col-1">
        </div>
      </main>

      <footer className="page-footer p-2">
      </footer>

    </div>
  );
}

function Background() {
  return (
    <div className="particles-container">
      <Particles className="particles" params={particleOpts}/>
    </div>
  );
}

export default App;
