import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import AddPost from '../Components/AddPost';
import { getallpostapi,likePostapi } from '../services/allapi';

import { useContext } from 'react';
import { responsecontext } from '../contextapi/Contextprovider';



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
     
       
       
    
     
      
    
   
 <Navbar className="navbar1" style={{ backgroundColor: "" }}>
    <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="text-primary" id="log">
            <i className="fa-regular fa-handshake fa-xl" style={{ color: "#0f6ba3" }} />{' '}
            Mindpal
        </Navbar.Brand>
        
       
      
    </Container>
</Navbar>

 <div className='post d-flex flex-column d-flex justify-content-center align-items-center'>

  <div className='container'>
    <h1 className='headingpost'>The Power of Vulnerability</h1>
    <h1 className='headingpost'>Share Your Story,Transform Your Life</h1>
    <div className='mt-4'>
      <AddPost></AddPost>
    
    </div>
  </div>
 
 </div>
 {
  allposts.length>0?
  <div className='row justify-content-center container-fluid mt-5'>
    {
      allposts.map(item=>(
        <div className='border shadow mb-3 me-1  h-50 ms-3' style={{borderRadius:"10px",width:"40rem"}} >
        <div className='d-flex flex-row mt-2 justify-content-between'>
          
          <h4 className='text-danger'>{item.username}</h4>
          <p className='mt-2'>{item.date}</p>
         
    
        </div>
        <p>{item.thought}
          </p>
          <div className='d-flex justify-content-center flex-wrap mb-3'>
          <button className='btn btn-light me-2'  onClick={() => handleLikePost(item._id)}> {item.likes.length} <i className="fa-solid fa-heart fa-xl" style={{color: "#c90d45",}} /> </button>
            <Link to={`/postind/${item.userid}`} className='btn btn-primary'>Readmore</Link>
          </div>
      
     
      
        
      </div>
      ))
    }
  
    
  
  
  </div>
  :
  <h2 className='text-center-danger'>No content Available</h2>

 }
 
 
 
 

 
 
  
  
    

 
 <div className='mt-5'>
    <Footer></Footer>
   </div>
    </>
  )
}

export default Post