import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as  BrowserRouter,Routes, Route} from 'react-router-dom'

import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
