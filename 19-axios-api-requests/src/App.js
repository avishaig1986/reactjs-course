/*

commands:

   npm install --save styled-components
   emmet snippet: rafce
   npm install --save style-components
   npx json-server -p 3500 -w data/data.json
   npm i react-router-dom -S
   npm i date-fns -S
   npm i axios

*/

import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import {format} from "date-fns"
import api from "./api/posts"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Router, Route, Routes, useNavigate  } from 'react-router-dom'
import { useState, useEffect} from 'react';

function App() { 
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await api.get('/posts') // replaces fetch!
        setPosts(response.data)
      } catch (err) {
        if (err.response){
          // Not in the 200 response range
          console.log(err.response.data);      
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`)
          }
        }
      }
      fetchPosts();
    },[])
    

  useEffect (() =>{
    const filtetedResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      setSearchResults(filtetedResults.reverse());

      
  },[posts, search])

const navigate = useNavigate();

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`) // replaces fetch!
      const postsWithoutTheCurrentDeleted = posts.filter(post => post.id !== id)
      setPosts(postsWithoutTheCurrentDeleted)
      navigate('/');

    } catch (err){
      console.log(`Error: ${err.message}`)

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp") ;
    const newPost = { id: id, title: postTitle, dateTime: dateTime, body: postBody }
    try{
      const response = await api.post('/posts',  newPost) // replaces fetch!
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('')
      setPostBody('')
      navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }

  }

  return (
    <div className="App">
      <Header />
      <Nav 
        search={search}
        setSearch={setSearch}
        />
      <Routes>
        <Route exact path="/" element={
          <Home 
            posts={searchResults}
          />
        }/>
        <Route exact path="/post" element={
          <NewPost 
                    handleSubmit={handleSubmit}
                    postTitle={postTitle}
                    setPostTitle={setPostTitle}
                    postBody={postBody}
                    setPostBody={setPostBody}
                    />
         }/>
        <Route exact path="/post/:id" element={
          <PostPage posts={posts}
                    handleDelete={handleDelete}/>}/>
        <Route exact path="/about" element={
          <About />}/>
        <Route path="*" element={
          <Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;