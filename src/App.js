import React from 'react';
import '../src/styles/main.scss';

import {BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/homepage'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
