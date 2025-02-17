import React, { useEffect } from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addpostapi } from '../services/allapi';
import { useContext } from 'react';

import { responsecontext } from '../contextapi/Contextprovider';

function AddPost() {

    const [show, setShow] = useState(false);
    
    const {setresponse}=useContext(responsecontext)

  const handleClose = () =>{setposts({
    username:"",bio:"",title:"",thought:"",date:""
  }) 
  setShow(false);}
  const handleShow = () => setShow(true);
  const[posts,setposts]=useState({
    username:"",bio:"",title:"",thought:"",date:""
  })
 

 
  const handleaddpost=async()=>{
    console.log(posts)
    const{username,bio,title,thought,date}=posts
   if(!username||!bio||!title||!thought||!date){
    toast.warning("invalid data")
    
   }
   else{
    const header={
      'Content-Type':'application/json',
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    }
    

   
    const result=await addpostapi(posts,header)
    console.log(result)
    if(result.status==201){
      toast.success("Post is Addedd")
      handleClose()
      setresponse(result)

    }
    else{
      toast.error("Something went wrong")
    }
   }
  }
  return (
   <>
   <button className=' btn' id='btn-post' onClick={handleShow}>Add Your Story</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       className='modal-l' >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark' >Share Your Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
                <input type="text" className='form-control mb-3' onChange={(e)=>setposts({...posts,username:e.target.value})} placeholder='Enter Username' />
                <input type="text" className='form-control mb-3' placeholder='Enter Date' onChange={(e)=>setposts({...posts,date:e.target.value})} />
                <input type="text" className='form-control mb-3' placeholder='Day Title' onChange={(e)=>setposts({...posts,title:e.target.value})}  />
                <textarea name="" id="" placeholder='write a Bio ,maximum 30 words' onChange={(e)=>setposts({...posts,bio:e.target.value})} className='form-control mb-3'></textarea>
                <textarea name="" id="" className='form-control mb-3' style={{height:"500px"}} placeholder='Share Your thoughts' onChange={(e)=>setposts({...posts,thought:e.target.value})}></textarea>
               
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleaddpost}>Save</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default AddPost