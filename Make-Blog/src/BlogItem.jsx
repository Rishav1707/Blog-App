/* eslint-disable react/prop-types */
export default function BlogItem({ blog }) {
  return (
    <div className="Blog-Post">
      <img
        className="Blog-image"
        src={URL.createObjectURL(blog.image)}
        alt="Blog"
      />
      <h2 className="Blog-Title">{blog.title}</h2>
      <p className="Blog-Content">{blog.content}</p>
      {/* Display other blog details like author and date if needed */}
    </div>
  );
}
