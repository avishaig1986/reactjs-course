// emmet snippet: rafce
import React from 'react'

function Content() {
    const names = ["Avish", "Alma", "Johnny"]
    const index = Math.floor(Math.random() * 3)
    return (
        <main>
            <p>
                Hello {names[index]}!
            </p>
        </main>
  )
}

export default Content