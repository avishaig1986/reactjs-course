// emmet snippet: rafce
import React from 'react'
import { useState } from 'react'

function Content() {
    const [name, setName] = useState('Dave')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ["Avish", "Alma", "Johnny"]
        const index = Math.floor(Math.random() * 3)
        setName(names[index])
    }

    const handleCount = () => {
        console.log(count) // will log 0
        setCount(count + 1) // 0 + 1 
        setCount(count +1) // 0 + 1 again
        // the second setCount call the function again and overrides the first call
        console.log(count) // will log 1
    }



    const handleClick = () => {console.log("clicked")}
    //const handleClick2 = (name) => {console.log(`${name}`)}
    //const handleClick3 = (e) => { console.log(e.target.innerText)}
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={ handleNameChange }>change name</button>
            <button onClick={ handleCount } >you click {count}</button>
        </main>
  )
}

export default Content