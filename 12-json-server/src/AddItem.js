// to initialize the snippets:
// ctrl + alt + r and select rafce
import React from 'react'
import {FaPlus} from 'react-icons/fa';
import { useRef} from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  
  return (
    
    /* 
    the event e is implicitliy transferred to onSubmit
    instead of onSubmit={(e) => handleSubmit(e)}
    we can just use onSubmit={handleSubmit}
    */

    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus
            id='addItem'
            ref={inputRef}
            type='text'
            placeholder='הוסף פריט'
            required
            value={newItem}
            onChange={
                (e) => {
                    setNewItem(e.target.value)
                }
            }
        />
        <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />

        </button>
    </form>
  )
}

export default AddItem