import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from './sketch';
import Nav from './components/Nav';
import About from './components/About';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="ms-5">
        <Routes>
          <Route path="/" element={<ReactP5Wrapper sketch={sketch} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
