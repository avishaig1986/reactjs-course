import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import api from './api/posts';
import DataContext from './context/DataContext';

const PostPage = () => {
  
  const {posts, setPosts} = useContext(DataContext)
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`); // replaces fetch!
      const postsWithoutTheCurrentDeleted = posts.filter(
        (post) => post.id !== id
      );
      setPosts(postsWithoutTheCurrentDeleted);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

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
