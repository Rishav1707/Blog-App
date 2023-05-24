/* eslint-disable react/prop-types */
import { useState } from "react";
import write from "./assets/write.svg";

export default function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new blog object
    const newBlog = {
      title,
      content,
      image,
      // Add other properties like author and date if needed
    };

    // Pass the new blog to the parent component
    onSubmit(newBlog);

    // Clear the form fields
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <form className="Form-element" onSubmit={handleSubmit}>
      <input
        className="input-element"
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Article Title..."
      />
      <textarea
        className="content-element"
        value={content}
        onChange={handleContentChange}
        placeholder="Article Content..."
      />
      <input
        className="file-element"
        type="file"
        onChange={handleImageChange}
      />
      <button type="submit">
        <img src={write}></img>Create
      </button>
    </form>
  );
}
