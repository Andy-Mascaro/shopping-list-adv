import React from 'react';
import { useLists } from '../../context/ListProvider';

export default function Lists() {
  const {
    handleAddList,
    handleEdit,
    list,
    item,
    setItem,
    handleClear,
    handleDelete,
  } = useLists();

  return (
    <>
      <div className="list">
        <label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>

        <button onClick={handleClear}>Clear All</button>

        <label>
          <button type="text" onClick={handleAddList}>
            Add
          </button>
        </label>
      </div>
      {list.map((data) => (
        <div key={data.id}>
          <p>{data.text}</p>
          <button type="edit" onClick={() => handleEdit}>
            Edit
          </button>
          <button type="edit" onClick={() => handleDelete(data.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
