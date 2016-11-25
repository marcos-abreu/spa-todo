import React from 'react';
import { Link } from 'react-router';

const App = props => {
  return (
    <div>
      <header id="app-header" className="row column">
        <h1>TODO App</h1>
        <nav>
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="user-profile">User Profile</Link></li>
          </ul>
        </nav>
      </header>

      {props.children}

    </div>
  );
};

export default App;
