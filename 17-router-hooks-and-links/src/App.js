/*

commands:

   npm install --save styled-components
   emmet snippet: rafce
   npm install --save style-components
   npx json-server -p 3500 -w data/db.json
   npm i react-router-dom -S
   npm i date-fns -S

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
import {format, set} from "date-fns"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Router, Route, Routes, useNavigate  } from 'react-router-dom'
import { useState, useEffect} from 'react';




function App() { 
  const [search, setSearch] = useState('')
  const [searchResults, serSearchResults] = useState('')

  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Blog post title 1",
      dateTime: "July 01, 2021 11:00:00 AM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo mi, mattis at turpis vitae, porttitor aliquet turpis. Duis posuere tortor a nunc ornare sollicitudin. Sed molestie tempor augue, hendrerit pellentesque odio rutrum posuere. Proin viverra nisi neque, quis semper arcu finibus non. Mauris porta ante vel felis posuere venenatis. Maecenas porttitor ornare rutrum. Aliquam congue ante sed neque tempus, eu mattis elit pulvinar. Maecenas semper nulla et sapien maximus auctor sit amet at tellus."
    },
    {
      id: 2,
      title: "Blog post title 2",
      dateTime: "April 10, 2022 11:45:00 AM",
      body: "Donec vitae ipsum neque. Suspendisse eu ullamcorper tellus. Curabitur id dui nisi. Phasellus ut tincidunt neque. Aliquam dictum, magna et tempor dapibus, ipsum sapien aliquet purus, eu aliquam orci tellus eget ipsum. Praesent dui sem, semper eget nunc in, sagittis fringilla ante. Quisque dui mauris, ultricies non porta sit amet, lobortis quis mi."
    },
    {
      id: 3,
      title: "Blog post title 3",
      dateTime: "Match 11, 2019 11:00:00 PM",
      body: "Maecenas ut neque sollicitudin felis mattis semper eget vel purus. Nullam libero ligula, vulputate vel orci et, tristique ullamcorper magna. Maecenas id nisi quis ligula ornare tincidunt eget lobortis nunc. Aliquam sed nisi dictum urna semper tristique eget ut leo. Nulla facilisi. Suspendisse potenti. Nunc est metus, tincidunt a ante quis, lobortis tempus lacus. Nullam viverra leo feugiat iaculis facilisis. Curabitur ut odio nulla."
    },
    {
      id: 4,
      title: "Blog post title 4",
      dateTime: "February 12, 2021 11:30:00 AM",
      body: "Curabitur eleifend, justo eu pellentesque sodales, nulla turpis interdum est, a semper diam neque vitae augue. In id vehicula sem. Nam in gravida tellus. Proin malesuada ipsum in luctus accumsan. Integer vehicula odio in orci pretium, vel cursus erat venenatis. Suspendisse lacinia massa vel odio eleifend blandit."
    },
  ])
const navigate = useNavigate();
  const handleDelete =(id) => {
    const postsInHandleDelete = posts.filter(post => post.id !== id)
    setPosts(postsInHandleDelete)
    navigate('/')

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp") ;
    const newPost = { id: id, title: postTitle, dateTime: dateTime, body: postBody }
    const allPosts = [...posts, newPost]
    setPosts(allPosts);
    setPostTitle('')
    setPostBody('')
    navigate('/')

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
            posts={posts}
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