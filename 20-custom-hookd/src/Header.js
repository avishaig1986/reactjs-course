import React from 'react'
import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'

const Header = ({width}) => {
  return (
    <header>
      <div className="container-fluid p-2 fs-1 bg-info text-start ">

        ColorCode Blog 👨🏻‍💻 🤔
        { width < 768 ? <FaMobileAlt /> :
          width < 992 ? <FaTabletAlt/>
        : <FaLaptop />}</div>
    </header>
  )
}

export default Header