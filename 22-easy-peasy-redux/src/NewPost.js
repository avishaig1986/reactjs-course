import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreState, useStoreActions} from 'easy-peasy'

const NewPost = () => {
  const navigate = useNavigate();
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle)
  const postBody = useStoreState((state) => state.postBody)

  const savePost = useStoreActions((actions) => actions.savePost)
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle)
  const setPostBody = useStoreActions((actions) => actions.setPostBody)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id: id,
      title: postTitle,
      dateTime: dateTime,
      body: postBody,
    };
    savePost(newPost);
    navigate('/');
  };

  return (
    <div className="NewPost container p-2 mt-3">
      <div className="row justify-content-center">
        <div className="col-10">
          <h2>Create New Post</h2>
          <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postTitle" className="mt-2 fs-5 fw-light">
              Title:
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="postTitle"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody" className="mt-2 fs-5 fw-light">
              Post Body
            </label>
            <textarea
              required
              className="form-control"
              id="postBody"
              value={postBody}
              rows="10"
              onChange={(e) => setPostBody(e.target.value)}
            />
            <button type="button submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
