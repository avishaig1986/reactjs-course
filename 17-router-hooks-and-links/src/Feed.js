import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <div className="container p-2 mt-3">
    {
        posts.map( post => (
            <Post post={post} key={post.id}/>
        ))
    }
    </div>
  )
}

export default Feed