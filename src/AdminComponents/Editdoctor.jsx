import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import base_url from '../services/baseurl';
import { editdoctorapi } from '../services/allapi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { responsecontext } from '../contextapi/Contextprovider';

function Editdoctor({pro}) {
    const[data,setdata]=useState({
         username:"",qualification:"",experience:"",fee:"",image:"",bio:"",email:"",specialization:""

    })
    const{setresponse}=useContext(responsecontext)
    const[preview,setpreview]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        setdata({...pro})

    },[])
    const nav=useNavigate()
    useEffect(()=>{
        if(data.image?.type){
          setpreview(URL.createObjectURL(data.image))
        }
        else{
          setpreview("")
        }
  
      },[data.image])
      const handleedit=async()=>{
        console.log(data)
        const{username,qualification,experience,fee,image,bio,email,specialization}=data
        if(!username||!qualification||!experience||!fee||!image||!bio||!email||!specialization
        ){
            toast.warning("invalid input")
        }
        else{
            if(data.image.type){
                const fd=new FormData()
                fd.append('username',username)
                fd.append('qualification',qualification)
                fd.append('experience',experience)
                fd.append('fee',fee)
                fd.append('image',image)
                fd.append('bio',bio)
                fd.append('email',email)
                fd.append('specialization',specialization)
                const header={
                    'Content-Type':'multipart/formdata',
                    'Authorization':` Token ${sessionStorage.getItem('token')}`
                }
                const result=await editdoctorapi(pro._id,header,fd)
                console.log(result)
                if(result.status==200){
                    toast.success("Details Edited Successfully")
                    handleClose()
                    nav('/allpro')
                    setresponse(result)
                    
                }
                else{
                    toast.error("something went wrong")
                }
            }
            else{
                const header={
                    'Content-Type':'application/json',
                    'Authorization':` Token ${sessionStorage.getItem('token')}`
                }
                const result=await editdoctorapi(pro._id,header,data)
                console.log(result)
                if(result.status==200){
                    toast.success("Details Edited Successfully")
                    handleClose()
                    nav('/allpro')
                    setresponse(result)
                }
                else{
                    toast.error("something went wrong")
                }
                


            }
           
        }
        

       

      }
  
  return (
   <>
  <button className='btn' onClick={handleShow}>
  <i className="fa-solid fa-pen-to-square fa-xl" style={{color: "#FFD43B",}} />
  </button>
   
       
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      className='modal-xl' >
        <Modal.Header closeButton>
          <Modal.Title>Edit Professionals Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col md={4}>
            <label>
              <input type="file" style={{display:"none"}} onChange={(e)=>setdata({...data,image:e.target.files[0]})}  />
              <img src={preview?preview:`${base_url}/uploads/${data.image}`} alt="" className='img-fluid' style={{cursor:"pointer"}}  />
            </label>
            </Col>
            <Col md={8}>
            <input type="text" onChange={(e)=>setdata({...data,username:e.target.value})} defaultValue={data.username} className='form-control mb-2'     placeholder='Enter Psychologist/Doctor Name' />
            <input type="text"  onChange={(e)=>setdata({...data,qualification:e.target.value})} defaultValue={data.qualification} className='form-control mb-2'   placeholder='Enter Qualification' />
            <input type="text"  onChange={(e)=>setdata({...data,specialization:e.target.value})} defaultValue={data.specialization} className='form-control mb-2'  placeholder='Enter Profession' />
            <input type="text"  onChange={(e)=>setdata({...data,experience:e.target.value})} defaultValue={data.experience} className='form-control mb-2'  placeholder='Enter Experience' />
            <input type="text"  onChange={(e)=>setdata({...data,email:e.target.value})} defaultValue={data.email} className='form-control mb-2' placeholder='Enter Email' />
            <input type="number"  onChange={(e)=>setdata({...data,fee:e.target.value})} defaultValue={data.fee} className='form-control mb-2'  placeholder='Enter Appointment Fee in Ruppee' />
            <textarea type="text"  onChange={(e)=>setdata({...data,bio:e.target.value})} defaultValue={data.bio} className='form-control mb-2'  placeholder='Write Bio' />
            
            
            </Col>
          </Row>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleedit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

   </>
  )
}

export default Editdoctor