import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import SystemDesigner from './SystemDesigner';

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/" component={SystemDesigner} />
    </div>
  );
}

export default App;
