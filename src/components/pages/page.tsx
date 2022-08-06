import React, {ReactDOM, useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
// import Pagination from "react-js-pagination";

import axios from 'axios';
//import './App.css';
const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jotqvldydj.execute-api.us-west-1.amazonaws.com/PRODUCT_RFID_EXCEPTIONS');
      setPosts(res?.data?.Exceptions);
      console.log(res.data)
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'></h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>  
  );
};
export default Page;