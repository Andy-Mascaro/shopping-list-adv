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
    setEdit
  } = useLists();
  
const redo = () => {
  setEdit(!edit);
};

  return (
    <>
      <div className="list">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
       
        <button onClick={handleClear}>Clear All</button>
          <button type="text" onClick={handleAddList}>
            Add
          </button>
      </div>
      
      {list.map((data) => (
        <div key={data.id}>
          <p>{data.text}</p>

          {edit && (
            <>
            <input type='text' value={edit.id} onSubmit={(e) => setEdit(e.target.value)}/>
            <button onClick={() => handleEdit(data.id)}>
            Save
          </button>
          </> 
          )}
       
          <button onClick={redo}>{edit ? 'Close' : 'EDIT'}</button>
          <button onClick={() => handleDelete(data.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
