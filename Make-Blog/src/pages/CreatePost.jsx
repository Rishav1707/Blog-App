/* eslint-disable react/prop-types */
import BlogForm from "../components/BlogForm";
import logo from "../assets/logo.svg";

export default function CreatePost() {
  return (
    <div className="Blog-Section">
      <h1>
        <img className="logo" src={logo} />
        Create Post
      </h1>
      <BlogForm />
    </div>
  );
}
