/* eslint-disable react/prop-types */
import BlogItem from "./BlogItem";

export default function BlogList({ blogs }) {
  return (
    <>
      {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </>
  );
}
