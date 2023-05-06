import React from "react";
import Feed from "./Feed";
const Home = ({ posts, fetchError, isLoading }) => {
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
          (posts.length ? (
            <Feed posts={posts} />
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
