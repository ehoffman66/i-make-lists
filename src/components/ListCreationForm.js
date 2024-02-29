import React, { useState } from 'react';

function ListCreationForm() {
  const [list, setList] = useState({ title: '', items: [''] });

  const handleTitleChange = (e) => {
    setList({ ...list, title: e.target.value });
  };

  const handleItemChange = (index, value) => {
    const newItems = [...list.items];
    newItems[index] = value;
    setList({ ...list, items: newItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={list.title} onChange={handleTitleChange} placeholder="List Title" />
      {list.items.map((item, index) => (
        <input key={index} type="text" value={item} onChange={(e) => handleItemChange(index, e.target.value)} placeholder="List Item" />
      ))}
      <button type="submit">Create List</button>
    </form>
  );
}
