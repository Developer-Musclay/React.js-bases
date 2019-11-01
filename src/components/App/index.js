// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import CustomerList from '../CustomerList';

// == Composant
const App = () => (
  <div id="app">
    <h1>React.js basics</h1>
    <p>by Developer_Musclay</p>
    <CustomerList />
  </div>
);

// == Export
export default App;
