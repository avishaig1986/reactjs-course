import React from 'react'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Nav = () => {
  const {search, setSearch} = useContext(DataContext);
  return (
    <nav className="Nav">
      <div className='container-fluid text-center bg-dark'>
      <form>
      <div className="row bg-dark">
      <div className="col-6 mt-1 mb-1 bg-dark text-light">
        <input 
            id="search" 
            type="text" 
            placeholder="Search Posts"
            className="form-control" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
    </div>
        <Link className="navBarLink col-2 p-2 bg-dark text-light text-decoration-none" to="/">Home</Link>
        <Link className="navBarLink col-2 p-2 bg-dark text-light text-decoration-none" to="/post">Post</Link>
        <Link className="navBarLink col-2 p-2 bg-dark text-light text-decoration-none" to="/about">About</Link>
      </div>  
      </form>
      </div>
    </nav>
  )
}

export default Nav