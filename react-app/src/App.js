import React from 'react';
import './index.css';
import './App.css';

import Particles from 'react-particles-js';
import particleOpts from './particle-options.js';

function App() {
  return (
    <div>
      <Mickey/>
      <div id="particles-js"></div>
      <Particles params={particleOpts}/>
    </div>
  );
}

function Mickey(props) {
  return (
    <div>
      <div class="row justify-content-around my-5">
        <div class="jumbotron text-center col-6">
          <div class="container">
            <h1 class="jumbotron-heading">Mickey Smith</h1>
            <hr class="my-4"/>
            <p class="p-sub-intro">
              Introductory information here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
