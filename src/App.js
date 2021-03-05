import React from 'react';
import '../src/styles/main.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>

      <Navbar />

    </Router>
  );
}

export default App;
