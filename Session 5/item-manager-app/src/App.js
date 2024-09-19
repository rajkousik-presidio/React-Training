import React, { useState } from 'react';
import { ItemProvider } from './context/ItemContext';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ItemProvider>
      <div className="container">
        <div className="header">
          <h1>Item Manager App</h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <AddItem />
        <ItemList searchTerm={searchTerm} />
      </div>
    </ItemProvider>
  );
};

export default App;
