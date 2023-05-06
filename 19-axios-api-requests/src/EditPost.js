import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
  return (
    <div className="NewPost container p-2 mt-3">
      {
        // if post exists it will be edited
        post && (
          <div className="row justify-content-center">
            <div className="col-10">
              <h2>Edit Post</h2>
              <form
                className="newPostForm"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="postTitle" className="mt-2 fs-5 fw-light">
                  Title:
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="postTitle"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody" className="mt-2 fs-5 fw-light">
                  Post Body
                </label>
                <textarea
                  required
                  className="form-control"
                  id="postBody"
                  value={editBody}
                  rows="10"
                  onChange={(e) => setEditBody(e.target.value)}
                />
                <button
                  type="button submit"
                  className="btn btn-primary mt-2"
                  onClick={() => handleEdit(post.id)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )
      }
      {
        // if post does not exist
        !post && (
          <div className="row justify-content-center">
            <h1>Post Not Found</h1>
            <p>Sorry 😭💔</p>
            <p>
              <Link to="/">Return to Homepage</Link>
            </p>
          </div>
        )
      }
    </div>
  );
};

export default EditPost;
