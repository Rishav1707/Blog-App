/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, auth, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
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

    // Create a new blog object
    const newBlog = {
      title: blogData.title,
      content: blogData.content,
      userId: auth?.currentUser?.uid,
      userName: auth?.currentUser?.displayName,
      userImage: auth?.currentUser?.photoURL,
    };

    // ImageFiles uploaded in the database
    if (!blogData.image) return;
    const filesFolderRef = ref(
      storage,
      `BlogsImages/${blogData.image.name + v4()}`
    );
    try {
      await uploadBytes(filesFolderRef, blogData.image);
      // Get Downloadable files URL
      const url = await getDownloadURL(filesFolderRef);
      newBlog.image = url;
      // Send the required data to the firebase database
      await addDoc(blogCollection, newBlog);
    } catch (error) {
      console.error("Error is ", error);
    }

    // Clear the form fields
    setblogData({
      ...blogData,
      title: "",
      content: "",
      image: null,
    });

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
        required
      />
      <textarea
        className="content-element"
        value={blogData.content}
        onChange={handleContentChange}
        placeholder="Article Content..."
        required
      />
      <input
        className="file-element"
        type="file"
        onChange={handleImageChange}
        required
      />
      <button type="submit">
        <img className="write-logo" src={write}></img>Create
      </button>
    </form>
  );
}
