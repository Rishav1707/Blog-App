import { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const handleBlogSubmit = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div className="Blog-Section">
      <h1>
        <img className="logo" src={logo}></img>My Blog App
      </h1>
      <BlogForm onSubmit={handleBlogSubmit} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
