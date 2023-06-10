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
      <h1 className="ReadMore-Heading">My id is {id}</h1>
      <h2>{targetData.title}</h2>
    </div>
  );
}
