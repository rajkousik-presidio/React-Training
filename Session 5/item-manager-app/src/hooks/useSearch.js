import { useState, useEffect } from 'react';

export const useSearch = (items, searchTerm) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (searchTerm) {
      setFilteredItems(
        items.filter(
          item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredItems(items);
    }
  }, [items, searchTerm]);

  return filteredItems;
};
