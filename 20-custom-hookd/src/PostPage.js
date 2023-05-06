import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete, handleEdit }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <div className="PostPage container p-2 mt-3">
      <div className="row justify-content-center">
        <div className="col-10">
          {post && (
            <>
              <h2>{post.title}</h2>
              <small className="postDate">🕑{post.dateTime}</small>
              <p className="mt-2">{post.body}</p>
              <Link to={`/edit/${post.id}`}>
                <button
                  type="button"
                  className="editButton btn btn-primary m-1"
                >
                  Edit Post
                </button>
              </Link>

              <button
                onClick={() => handleDelete(post.id)}
                type="button"
                className="deleteButton btn btn-danger m-1"
              >
                Delete Post
              </button>
            </>
          )}
          {!post && (
            <>
              <h2>Post Not Foud</h2>
              <p>got here by mistake</p>
              <p>
                <Link to="/">Visit our homepage</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
