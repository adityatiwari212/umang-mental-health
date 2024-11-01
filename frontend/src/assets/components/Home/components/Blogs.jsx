import React, { useEffect, useState } from 'react';
import publicApi from '../../../../public_api.js';
import { useNavigate } from 'react-router-dom';
import "../styles/Blogs.css"

export default function Blogs() {
  const [bigBlog, setBigBlog] = useState(null);
  const [smallBlogs, setSmallBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    publicApi.get('api/umang2/blog/recent/4')
      .then(response => {
        const { blogs } = response.data;
        setBigBlog(blogs[0]);
        setSmallBlogs(blogs.slice(1, 4));
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  }

  if (loading) {
    return <>Loading......</>;
  }

  return (
   <>
      <div className="big-blog" onClick={() => handleBlogClick(bigBlog?._id)}>
        <div className="img">
          <img src='https://media.istockphoto.com/photos/mental-health-blue-board-concept-picture-id672250350?k=6&m=672250350&s=612x612&w=0&h=EW3uGi4MlbTu4u4WDTVc6VkUjit14Ig-DUDdfhxY_Es=' alt="Big Blog" className="big-blog-img" />
        </div>
        <div className="big-blog-info">
          <div className="big-blog-topic">Hot Topic</div>
          <div className="big-blog-title">{bigBlog?.title}</div>
          <div className="content-blogs">
            {bigBlog?.content.slice(0, 400)}...
          </div>
          <div className="big-blog-meta">
            Written by {bigBlog?.writtenBy?.firstName} {bigBlog?.writtenBy?.lastName} - New York, 22 August 2022
          </div>
          <div className="big-blog-readmore">Read More</div>
        </div>
      </div>
      <div className="small-blogs-container">
        {smallBlogs.map((blog, index) => (
          <div key={index} className="small-blog" onClick={() => handleBlogClick(blog?._id)}>
            <img src='https://media.istockphoto.com/photos/mental-health-blue-board-concept-picture-id672250350?k=6&m=672250350&s=612x612&w=0&h=EW3uGi4MlbTu4u4WDTVc6VkUjit14Ig-DUDdfhxY_Es=' alt="Small Blog" className="small-blog-img" />
            <div className="small-blog-info">
              <div className="small-blog-title">{blog?.title}</div>
              <div className="small-blog-meta">
                Written by {blog?.writtenBy?.firstName} {blog?.writtenBy?.lastName} - New York, 22 August 2022
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
