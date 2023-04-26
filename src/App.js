import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Team from './components/Team';
import Interaction from './components/Interaction';
// import Inter from './components/Inter';

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Interaction />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
