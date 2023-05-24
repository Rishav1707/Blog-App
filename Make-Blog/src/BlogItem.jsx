/* eslint-disable react/prop-types */
export default function BlogItem({ blog }) {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <img src={URL.createObjectURL(blog.image)} alt="Blog" />
      {/* Display other blog details like author and date if needed */}
    </div>
  );
}
