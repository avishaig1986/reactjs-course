import React from 'react'
import Feed from './Feed'
const Home = ({posts}) => {
  return (
    // check if there are new posts
    <main className="Home">
        { posts.length 
            ? (<Feed posts={posts}/>)
            : (<h1>No Post!</h1>)}
    </main>
  )
}

export default Home