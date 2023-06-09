/*

commands:

   npm install --save styled-components
   emmet snippet: ctrl + rafce
   ctrl + shift + p = commands 
   shift + alt + f = prettier
   npm install --save style-components
   npx json-server -p 3500 -w data/data.json
   npm i react-router-dom -S
   npm i date-fns -S
   npm i axios

*/

import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { format } from "date-fns";
import api from "./api/posts";
import EditPost from "./EditPost";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { Router, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const {width} = useWindowSize();
  const { data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  },[data])

  useEffect(() => {
    const filtetedResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filtetedResults.reverse());
  }, [posts, search]);

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

  const handleEdit = async (id) => {
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id: id,
      title: editTitle,
      dateTime: dateTime,
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle('');
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: failed to edit ${err.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id: id,
      title: postTitle,
      dateTime: dateTime,
      body: postBody,
    };
    try {
      const response = await api.post("/posts", newPost); // replaces fetch!
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <Header width={width}/>
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={
            <Home 
              posts={searchResults} 
              fetchError={fetchError}
              isLoading={isLoading}
              />
            } 
        />
        <Route
          exact
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          exact
          path="/edit/:id"
          element={
            <EditPost
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />
          }
        />
        <Route
          exact
          path="/post/:id"
          element={
            <PostPage
              posts={posts}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
