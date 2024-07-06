import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Add these imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/Home'; // Add these imports
import About from './components/About'; // Add these imports
import Contact from './components/Contact'; // Add these imports

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Home />} /> {/* Update the element prop */}
              <Route path="/about" element={<About />} /> {/* Update the element prop */}
              <Route path="/contact" element={<Contact />} /> {/* Update the element prop */}
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
