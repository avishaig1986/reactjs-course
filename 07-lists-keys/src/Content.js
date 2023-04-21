// emmet snippet: rafce
import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'


// react icons: https://www.npmjs.com/package/react-icons
// npm install react-icons --save

function Content() {
    const [items, setItems] = useState([
        { 
            id : 1,
            checked: false,
            itemName: "Keyboard K1"
        },
        { 
            id : 2,
            checked: false,
            itemName: "Keyboard K2"
        },
        { 
            id : 3,
            checked: true,
            itemName: "Keyboard K3"
        }
    ]);

    const handleCheck = (id) => {
/*
// https://www.tutorialspoint.com/what-is-difference-between-foreach-and-map-method-in-javascript#:~:text=map()%20vs%20forEach()&text=The%20map()%20method%20returns,the%20elements%20of%20an%20array.

// .forEach itterates the object without a returning value
        const listItems = [...items]

        listItems.forEach(item => {
            if (id === item.id){
                if (item.checked === true){
                    item.checked = false
                }
                else {
                    item.checked = true
                }
                
            }
        })
*/
/*
// .map itterates an object, change the value and returns a value
        const mappedItems = listItems.map((item) => {
            if (id === item.id){
                if (item.checked === true){
                    item.checked = false
                    return item
                }
                else {
                    item.checked = true
                    return item
                }
            }
            else {
                return item
            }
        })

        console.log(mappedItems)
*/
        // return opposite boolean https://stackoverflow.com/questions/12772494/how-to-get-opposite-boolean-value-of-variable-in-javascript

        console.log(`item: ${items.forEach((item) => console.log(item))}`)
        const listItems = items.map((item) => item.id === id ? {  ...item, checked: !item.checked } : item);

        setItems(listItems)

        localStorage.setItem('shoppingList', JSON.stringify(listItems));
        console.log(JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        //console.log(id)
        const listItems = items.filter((item) => item.id !== id );
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }
    

    return (
        <main>
            { items.length ? (
            <ul>
                {
                    items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? {textDecoration: 'line-through'} : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.itemName}</label>
                            <FaTrashAlt 
                                role="button" 
                                tabIndex="0"
                                onClick={ () => handleDelete(item.id)}
                            />
                        </li>
                    ))
                }
            </ul>
            ): 
            (
                <p style={{marginTop: '2rem'}}>סל הקניות ריק</p>
            )
            }          
          </main>
  )
}

export default Content