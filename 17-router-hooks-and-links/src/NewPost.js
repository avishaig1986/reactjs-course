import React from 'react'

const NewPost = () => {
  return (

          <div className="container p-2 mt-3">
      <div className="row justify-content-center">  
      <div className="col-10">      
      <h2>New Post</h2>
        <form>
        <label htmlFor="postTitle" className='fs-5 fw-light'>Post Title</label>
        <input type="text" class="form-control" id="postTitle" placeholder="Title"/>
        <label htmlFor="postBody" className='fs-5 fw-light'>Post Title</label>
        <input type="text" class="form-control" id="postBody" placeholder="Title"/>
        </form>
        </div>
        </div>


        
    </div>
  )
}

export default NewPost