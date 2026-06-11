import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import AddPost from '../Components/AddPost';
import { getallpostapi,likePostapi } from '../services/allapi';

import { useContext } from 'react';
import { responsecontext } from '../contextapi/Contextprovider';
import SimpleNav from '../Components/SimpleNav';



function Post() {
  const[allposts,setallposts]=useState([])
  const{response}=useContext(responsecontext)
  useEffect(()=>{
    getallposts()


  },[response])
  const getallposts=async()=>{
    const header={
      'Content-Type':'application/json',
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    }
    const result=await getallpostapi(header)
    console.log(result)
    if(result.status==200){
      setallposts(result.data)
    }
  }
  const handleLikePost = async (id) => {
    const header = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    };
    const result = await likePostapi(id, header);
    if (result.status === 200) {
      getallposts() // Refresh posts after like
    }
};

  return (
    <>

    <SimpleNav />

 <div className='mp-post-hero d-flex flex-column justify-content-center align-items-center'>

  <div className='container text-center'>
    <h1>The Power of Vulnerability</h1>
    <h1>Share Your Story, Transform Your Life</h1>
    <div className='mt-4'>
      <AddPost></AddPost>

    </div>
  </div>

 </div>
 {
  allposts.length>0?
  <div className='d-flex flex-column align-items-center mt-5'>
    {
      allposts.map(item=>(
        <div className='mp-post-card' key={item._id}>
        <div className='d-flex flex-row mt-2 justify-content-between'>

          <h4 className='mp-post-author'>{item.username}</h4>
          <p className='mp-post-date'>{item.date}</p>


        </div>
        <p>{item.thought}
          </p>
          <div className='d-flex justify-content-center flex-wrap mb-3'>
          <button className='mp-like-btn me-2' onClick={() => handleLikePost(item._id)}> {item.likes.length} <i className="fa-solid fa-heart" /> </button>
            <Link to={`/postind/${item.userid}`} className='btn btn-primary'>Readmore</Link>
          </div>



        </div>
      ))
    }



  </div>
  :
  <h2 className='text-center text-danger mt-5'>No content Available</h2>

 }




 <div className='mt-5'>
    <Footer></Footer>
   </div>
    </>
  )
}

export default Post