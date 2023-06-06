/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import write from "../assets/write.svg";

export default function BlogForm() {
  const blogCollection = collection(db, "Blog-Item");
  const navigate = useNavigate();
  const [blogData, setblogData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleTitleChange = (e) => {
    setblogData({ ...blogData, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setblogData({ ...blogData, content: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setblogData({ ...blogData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all the fields filled or not
    if (blogData.title.trim() === "") {
      alert("Article title cannot be left blank");
      return;
    }
    if (blogData.content.trim() === "") {
      alert("Article content cannot be left blank");
      return;
    }
    if (blogData.image === null) {
      alert("No file chosen");
      return;
    }

    // Create a new blog object
    const newBlog = {
      title: blogData.title,
      content: blogData.content,
      image: URL.createObjectURL(blogData.image),
    };

    // Send the required data to the firebase database
    try {
      await addDoc(blogCollection, newBlog);
    } catch (error) {
      console.log("Error is ", error);
    }

    // Clear the form fields
    setblogData({ ...blogData, title: "" });
    setblogData({ ...blogData, content: "" });
    setblogData({ ...blogData, image: null });

    // Navigate to home page
    navigate("/");
  };

  return (
    <form className="Form-element" onSubmit={handleSubmit}>
      <textarea
        maxLength="150"
        className="input-element"
        value={blogData.title}
        onChange={handleTitleChange}
        placeholder="Article Title..."
      />
      <textarea
        className="content-element"
        value={blogData.content}
        onChange={handleContentChange}
        placeholder="Article Content..."
      />
      <input
        className="file-element"
        type="file"
        onChange={handleImageChange}
      />
      <button type="submit">
        <img className="write-logo" src={write}></img>Create
      </button>
    </form>
  );
}
