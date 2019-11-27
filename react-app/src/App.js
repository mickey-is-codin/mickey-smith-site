import React from 'react';
import './index.css';
import './App.css';

import Particles from 'react-particles-js';
import particleOpts from './particle-options.js';

function App() {
  return (
    <div>
      <Mickey/>
      <div className="particles-js">
        <Particles params={particleOpts}/>
      </div>
    </div>
  );
}

function Mickey(props) {
  return (
    <div className="wrapper d-flex flex-column">

      <header className="page-header p-2">
      </header>

      <main className="page-meat row justify-content-around">
        <div className="page-left col-3">
        </div>
        <div className="page-main col-3">
          <h1 className="">Hello</h1>
          <p className="lead">Text here for writing some stuff that will be additional</p>
        </div>
        <div className="page-right col-3">
        </div>
      </main>

      <footer className="page-footer p-2">
      </footer>

    </div>
  );
}

export default App;
