import React, { createContext, useContext, useReducer, useState } from 'react';
const initialList = [{ id: Date.now(), text: 'Milk' }];

const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [{ id: Date.now(), text: action.payload.text }, ...state];

            case 'EDIT_ITEM':
                return state.map((list) =>
                list.id === payload.list.id ? action.payload.list : list
                );

                case 'CLEAR_ALL':
                return [];

                case 'DELETE':
                    return state.filter((remove) => action.payload.id !==remove.id);

           
    }
}



const ListContext = createContext();
export const ListProvider = ({ children }) => {
    const [list, dispatch] = useReducer(listReducer, initialList);
    const [item, setItem] = useState('');
    const handleAddList = () => {
        dispatch({ type: 'ADD_ITEM', payload: { text: item } });
        setItem('')
    };
    const handleEdit = (list) => {
        dispatch({ type: 'EDIT_ITEM', payload: { list }});
    };
    const handleClear = () => {
        dispatch({ type: 'CLEAR_ALL' });
    };
    const handleDelete = (id) => {
        dispatch({ type: 'DELETE', payload: {id}});
    };

    

  return (
      <ListContext.Provider
      value={{ list, handleAddList, handleEdit, item, setItem, handleClear, handleDelete }}>
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
