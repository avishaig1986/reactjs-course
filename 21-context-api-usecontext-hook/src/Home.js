import React from "react";
import Feed from "./Feed";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = () => {
  const {searchResults, fetchError, isLoading} = useContext(DataContext)
  return (
    <main className="Home">
      <div className="container p-2 mt-3">
        {isLoading && 
          <div className="row justify-content-center">
            <div className="col-10">
              <p className="statusMsg">Loading ...</p>
            </div>
          </div>
        }
        {fetchError &&
          <div className="row justify-content-center">
            <div className="col-10">
              <p className="statusMsg" style={{ color: "red" }}>
                {fetchError}
              </p>
            </div>
          </div>
        }
        {!isLoading &&
          !fetchError &&
          (searchResults.length ? (
            <Feed posts={searchResults} />
          ) : (
            <p className="statusMsg">no posts to display</p>
          ))}
      </div>
    </main>
    // check if there are new posts
    /*
    <main className="Home">
      <div className="container p-2 mt-3">
        { posts.length 
            ? (<Feed posts={posts}/>)
            : (
    <div className="row justify-content-center">
            <div className="col-10">
            
            <h2>Feed Empty! ☹</h2>
            </div></div>
            
            )}</div>
    </main>
    */
  );
};

export default Home;
