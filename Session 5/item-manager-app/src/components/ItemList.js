import React, { useContext, useState } from 'react';
import ItemContext from '../context/ItemContext';
import { useSearch } from '../hooks/useSearch';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

const SortIcon = ({ sortOrder }) => {
  return (
    <span>
      {sortOrder === 'asc' ? <FaSortAlphaDown/> : <FaSortAlphaDownAlt />}
    </span>
  );
};

const ItemList = ({ searchTerm }) => {
  const { state, dispatch } = useContext(ItemContext);
  const filteredItems = useSearch(state, searchTerm);

  const [editingItemId, setEditingItemId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc'); 

  const startEdit = (item) => {
    setEditingItemId(item.id);
    setEditName(item.name);
    setEditDescription(item.description);
  };

  const cancelEdit = () => {
    setEditingItemId(null);
    setEditName('');
    setEditDescription('');
  };

  const saveEdit = (id) => {
    dispatch({
      type: 'EDIT_ITEM',
      payload: { id, name: editName, description: editDescription },
    });
    cancelEdit();
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'description') {
        comparison = a.description.localeCompare(b.description);
      } else {
        comparison = a.id - b.id; 
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedItems = sortItems(filteredItems);

  return (
    <table className="item-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('id')}>
            Sl. No. {sortBy === 'id' && <SortIcon sortOrder={sortOrder} />}
          </th>
          <th onClick={() => handleSort('name')}>
            Name {sortBy === 'name' && <SortIcon sortOrder={sortOrder} />}
          </th>
          <th onClick={() => handleSort('description')}>
            Description {sortBy === 'description' && <SortIcon sortOrder={sortOrder} />}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
              {editingItemId === item.id ? (
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {editingItemId === item.id ? (
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
              ) : (
                item.description
              )}
            </td>
            <td>
              {editingItemId === item.id ? (
                <>
                  <button onClick={() => saveEdit(item.id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEdit(item)}>Edit</button>
                  <button onClick={() => removeItem(item.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
