import React from 'react'
import {Link} from 'react-router-dom';

const Nav = ({search, setSearch}) => {
  return (
    <nav className="Nav container-flex text-center bg-dark">
      <form>
    <div className="row">
      <div className="col-1">
    </div>
      <div className="p-1 col-10 bg-dark text-light">
        <input 
            id="search" 
            type="text" 
            placeholder="Search Posts"
            className="form-control" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
    </div>

  </div>
      </form>
      <div className="row">
        <Link className="navBarLink p-2 col-2 bg-dark text-light text-decoration-none" to="/">Home</Link>
        <Link className="navBarLink p-2 col-2 bg-dark text-light text-decoration-none" to="/post">Post</Link>
        <Link className="navBarLink p-2 col-2 bg-dark text-light text-decoration-none" to="/about">About</Link>
      </div>  
    </nav>
  )
}

export default Nav