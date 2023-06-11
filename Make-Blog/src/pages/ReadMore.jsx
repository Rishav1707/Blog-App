import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./ReadMore.css";

export default function ReadMore() {
  const { id } = useParams();
  const [targetData, setTargetData] = useState([]);

  useEffect(() => {
    async function getBlogData() {
      try {
        const blogRef = doc(db, "Blog-Item", id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setTargetData(blogSnap.data());
        } else {
          console.log("Blog not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getBlogData();
  }, [id]);

  return (
    <div className="ReadMore-Container">
      {targetData.image && (
        <img
          className="ReadMore-image"
          src={targetData.image}
          alt="BlogImage"
        />
      )}
      <h2 className="ReadMore-heading">{targetData.title}</h2>
      <p className="ReadMore-content">{targetData.content}</p>
      <div className="ReadMore-userDetails">
        <h3 className="ReadMore-userName">
          <p className="contribution">Contributed by -</p>
          <img className="userImage" src={targetData.userImage} />
          {targetData.userName}
        </h3>
      </div>
    </div>
  );
}
