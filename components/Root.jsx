import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import About from './About';

function Root() {
  return (
    <HashRouter>
      <Route path="/" exact component={App} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default Root;
