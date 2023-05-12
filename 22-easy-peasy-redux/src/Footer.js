import React from 'react'
import {useStoreState } from 'easy-peasy'
const today = new Date()

const Footer = () => {
  const postCount = useStoreState((state) => state.postCount)
  return (
    <footer className="fixed-bottom mt-auto p-1 fs-5 bg-info text-center">
        <div className="container">
          <span > Copyright &copy; {today.getFullYear()} 😎 Posts: {postCount}</span>
         
        </div>
    </footer>
  )
}

export default Footer