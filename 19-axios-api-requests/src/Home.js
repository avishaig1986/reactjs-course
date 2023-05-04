import React from 'react'
import Feed from './Feed'
const Home = ({posts}) => {
  return (
    // check if there are new posts
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
  )
}

export default Home