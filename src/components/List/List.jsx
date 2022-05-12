import React, { useState } from 'react'


export default function List() {
const [item, setItem] = useState();
   
  return (
      <div className='list'>
          <label>
              <input type='text' value={item} onChange={(e) => setItem(e.target.value)}/>
          </label>
      </div>
    
  );
  }
