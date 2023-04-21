// emmet snippet: rafce
import React from 'react'

function Content() {
    const names = ["Avish", "Alma", "Johnny"]
    const index = Math.floor(Math.random() * 3)
    const handleClick = () => {console.log("clicked")}
    const handleClick2 = (name) => {console.log(`${name}`)}
    const handleClick3 = (e) => { console.log(e.target.innerText)}
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {names[index]}!
            </p>
            <button onClick={ handleClick}>Click Me</button>
            <button onClick={ () => handleClick2(names[index])}>Click Me2</button>
            <button onClick={ (e) => handleClick3(e)}>Click Me3</button>
        </main>
  )
}

export default Content