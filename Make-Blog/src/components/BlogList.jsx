/* eslint-disable react/prop-types */
import BlogItem from "./BlogItem";

export default function BlogList({ blogs }) {
  return (
    <>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </>
  );
}
