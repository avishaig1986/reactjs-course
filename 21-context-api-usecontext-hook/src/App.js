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
import EditPost from "./EditPost";

import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<NewPost />} />
          <Route exact path="/edit/:id" element={<EditPost />} />
          <Route exact path="/post/:id" element={<PostPage />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
