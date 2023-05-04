import React from 'react'

const today = new Date()

const Footer = () => {
  return (
    <footer className="fixed-bottom mt-auto p-1 fs-5 bg-info text-center">
        <div className="container">
          <span > Copyright &copy; and footer content {today.getFullYear()} 😎</span>
         
        </div>
    </footer>
  )
}

export default Footer