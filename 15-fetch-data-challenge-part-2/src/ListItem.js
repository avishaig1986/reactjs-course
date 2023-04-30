import React from 'react'

const ListItem = (item) => {
  const entries = Object.entries(item)
  return (
    <li>
        {JSON.stringify(item)}
    </li>
  )
}

export default ListItem