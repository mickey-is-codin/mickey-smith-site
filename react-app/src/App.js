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
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">

      <header class="masthead">
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Mickey Smith</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>

      <footer class="mastfoot">
      </footer>

    </div>
  );
}

export default App;
