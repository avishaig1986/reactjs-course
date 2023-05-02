import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => {
  return (
    <div className="row justify-content-center">
            <div className="col-10">
            <Link className="text-decoration-none text-dark" 
                  to={ `/post/${post.id}`}>
              <h2>{post.title}</h2>
              <small className="postDate">
                🕑{post.dateTime}
              </small>
            </Link>
            <p className="mt-2">
              {post.body.length >= 100
                ? `${post.body.substring(0,100)}...`
                : post.body
              }</p>
            <hr/>
            </div>
            
    </div>
  )
}

export default Post