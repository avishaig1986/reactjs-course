// emmet snippet: rafce
import React from 'react'
import Row from './Row'
const Table = ({items}) => {
  return (
        <table className="table table-bordered mt-5">
            <tbody>
                {items.map(item => (
                    <Row key={item.id} item={item} />
                ))}
            </tbody>
        </table>
  )
}

export default Table