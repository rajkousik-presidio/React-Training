import React, { useState, useContext } from 'react';
import ItemContext from '../context/ItemContext';

const AddItem = () => {
  const { dispatch } = useContext(ItemContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      dispatch({ type: 'ADD_ITEM', payload: { name, description } });
      setName('');
      setDescription('');
    }
  };

  return (
    <div>

      <form id="addForm" onSubmit={handleSubmit} className="hidden form-style">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item Description"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
