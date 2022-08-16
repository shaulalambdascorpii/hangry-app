import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Business from '../Business/Business';


function App() {
  return (
    <div className="App">
      <h1>Hangry?</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
