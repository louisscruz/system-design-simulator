import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  document.write('<div id="root">loading...<div>');
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
