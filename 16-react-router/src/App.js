// npm install --save styled-components
// emmet snippet: rafce

// npm install --save style-components

// npx json-server -p 3500 -w data/db.json

// npm i react-router-dom -S
import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'

import { Router, Route, Routes, useHistory } from 'react-router-dom'
import { useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/post" element={<NewPost />}/>
        <Route exact path="/post/:id" element={<PostPage />}/>
        <Route exact path="/about" element={<About />}/>
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;