import React, { useRef, useLayoutEffect } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const searchInput = useRef();

  useLayoutEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <div className="search-bar">
      <input
        ref={searchInput}
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
