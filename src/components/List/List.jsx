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
    edit,
    setEdit,
  } = useLists();

  const redo = () => {
     setEdit(!edit);
  };

  return (
    <>
      <div className="list">
        <input
          placeholder="Add new item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleClear}>Clear All</button>

        <button type="text" onClick={handleAddList}>Add</button>
      </div>

      {list.map((data) => (
        <div key={data.id}>
          <p>{data.text}</p>

          {edit && (
            <>
              <input
              placeholder='Edit item'
                type="text"
                value={edit.id}
                onChange={(e) => setEdit(e.target.value)}
              />
                <button type="text"onClick={() => handleEdit(data.id)}>Save</button>
                  <button onClick={() => handleDelete(data.id)}>Delete</button>
            </>
          )}
           <button onClick={redo}>{edit ? 'Close Edit' : 'Edit'}</button> 
        </div>
      ))}
    </>
  );
}
