/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import BlogList from "../components/BlogList";

export default function Home() {
  const [blogData, setblogData] = useState([]);
  const blogCollection = collection(db, "Blog-Item");

  useEffect(() => {
    async function getBlogData() {
      try {
        const data = await getDocs(blogCollection);
        const filtered_data = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setblogData(filtered_data);
      } catch (error) {
        console.error("Error is ", error);
      }
    }

    getBlogData();
  }, []);

  return (
    <>
      <BlogList blogs={blogData} />
    </>
  );
}
