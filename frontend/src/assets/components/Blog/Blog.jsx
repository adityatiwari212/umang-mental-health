import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import publicApi from '../../../public_api';
import "./Blog.css"
import { LeftNavBar } from '../Community/Community';
import RightSideBar from '../Solutions/RightSideBar';
function Blog() {
  const { id } = useParams();  // Correct placement of useParams
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    publicApi.get(`/api/blogs/${id}/`).then((response) => {
      const data = response.data;
      setBlog(data);
      setLoading(false);  // Set loading to false after fetching data
    }).catch((error) => {
      console.error("Error fetching blog:", error);
      setLoading(false);
    });
  }, [id]);  

  if (loading) {
    return <>Loading......</>;
  }

  return (
    <>
    <div className="blog-container">
  <LeftNavBar/>
  <div className="blog">

      <div className='blog-title'>
        {blog?.title}
      </div>
      <div className="blog-content">
        {blog?.content}
      </div>
  </div>
    <RightSideBar/>
    </div>
    </>
  );
}

export default Blog;
