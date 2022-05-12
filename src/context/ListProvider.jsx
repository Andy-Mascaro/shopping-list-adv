import React, { createContext, useContext, useReducer } from 'react';
const initialList = [{ text: 'Milk' }];

const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [{ id: Date.now(), text: action.payload.text }, ...state];

           
    }
}



const ListContext = createContext();
export const ListProvider = ({ children }) => {
    const [list, setList] = useReducer(listReducer, initialList);

    const handleAddList = (text) => {
        dispatch({ type: 'ADD_ITEM', payload: { text } });
    };

    

  return (
      <ListContext.Provider
      value={{ list, setList, handleAddList }}>
          {children}
      </ListContext.Provider>
    
  );
};
export const useLists = () => {
    const context = useContext(ListContext);

    if (context === undefined)
    throw new Error('useList must be called from ListProvider');
    return context;
};
