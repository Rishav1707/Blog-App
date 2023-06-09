/* eslint-disable react/prop-types */
export default function BlogItem({ blog }) {
  return (
    <div className="Blog-Post">
      {blog.image && <img className="Blog-image" src={blog.image} />}
      <h2 className="Blog-Title">{blog.title}</h2>
      <p className="Blog-Content">{blog.content}</p>
      <div className="userDetails">
        <h3 className="userName">
          <img className="userImage" src={blog.userImage} />
          {blog.userName}
        </h3>
      </div>
    </div>
  );
}
