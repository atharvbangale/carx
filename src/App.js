// Import the React library
import React from 'react';

// Define the App component
function App() {
  return (
    // The main container div for the App component
    <div className="App">
      {/* Header section of the App */}
      <header className="App-header">
        {/* Navbar component using Bootstrap classes */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Brand name or logo */}
          <a className="navbar-brand" href="#">Navbar</a>
          {/* Button for toggling the navbar in mobile view */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Collapsible part of the navbar */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navbar items */}
            <ul className="navbar-nav">
              {/* Active navbar item */}
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              {/* Navbar item */}
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              {/* Navbar item */}
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Main content container with some margin at the top */}
        <div className="container mt-5">
          {/* Heading */}
          <h1>Hello, Bootstrap!</h1>
          {/* Lead paragraph */}
          <p className="lead">This is a simple example of using Bootstrap in a React project.</p>
        </div>
      </header>
    </div>
  );
}

// Export the App component as the default export
export
