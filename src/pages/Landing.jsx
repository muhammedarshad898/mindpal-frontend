import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { useEffect,useState } from 'react';
import { getdoctorapi, getprofileonlandingapi } from '../services/allapi';
import base_url from '../services/baseurl';



function Landing() {
  const [doctor,setdoctor]=useState([])
   const [profiledetail, setProfileDetail] = useState([]);
 
  useEffect(()=>{
    getdoctor()
   handlegetprofile()
  

  },[])
  const getdoctor=async()=>{
    const result=await getdoctorapi()
    console.log(result)
    if(result.status==200){
      setdoctor(result.data)
    }
  }
  console.log(doctor)

  const handlegetprofile=async()=>{
    const result=await getprofileonlandingapi()
    console.log(result)
    if(result.status==200){
      setProfileDetail(result.data)

    }
  }

  
 
          

  return (
    
   <>
   <div id='landing'>
   <Header></Header>
   <div className='d-flex justify-content-center align-items-center flex-column landing' style={{backgroundImage:'url(https://personnelgroup.com.au/wp-content/uploads/2023/08/iStock-1471842338-2.jpg)',backgroundSize:"cover",backgroundPosition:"center",height:"100vh"}}>
   <div className='container'>
    <h1 className='mb-2 text-dark' id='h1'>Healing Together, </h1><h1 className='text-primary'>Growing Together...</h1>
    <div className='mt-5'>
    <p className='para text-light' id='para1'>Discover a safe, supportive space for your family to grow and thrive.<br/>Our expert therapists provide compassionate guidance to help you navigate life's challenges, <br/> strengthen relationships, and cultivate a happier, healthier home environment.</p></div>
    <div> <Link to={sessionStorage.getItem('token')?'/test':'/auth'} className='btn btn-primary btn-rounded-circle mt-3 btn-lg' style={{borderRadius:"15px"}}>Start with a Test</Link></div>
   
   </div>
   </div>
   <div className='container-fluid row  justify-content-center mt-5'>
   <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-2'>
      <Card.Img variant="top" src="https://api.kramesstaywell.com/Content/6066ca30-310a-4170-b001-a4ab013d61fd/ucr-images-v1/Images/depressed-teenager-273299" style={{height:"250px"}} className='img-fluid' />
      <Card.Body>
        <Card.Title className='text-success'>Recognise the Signs</Card.Title>
        <Card.Text>
        Don't Ignore the Warning Signs,Depression can manifest differently in everyone.
        </Card.Text>

       
        <Link className='btn btn-success' to={sessionStorage.getItem('token')?'/test':'/auth'}>Take a Test</Link>
      </Card.Body>
    </Card>
   <Card style={{ width: '18rem',padding:"0px"  }} className='me-5 mb-2'>
      <Card.Img variant="top" src="https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/ev6h6d3edq9jgbnpntvf.jpg" style={{height:"250px"}}  className='img-fluid'/>
      <Card.Body>
        <Card.Title className='text-success'>Breaking the Stigma</Card.Title>
        <Card.Text>
        Depression is not a sign of weakness. It's a sign of strength to seek help.
        </Card.Text>
       
        <Link className="btn btn-success" to={sessionStorage.getItem('token')?'/post':'/auth'}>Share your Story</Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px"  }} className='me-5 mb-2'>
      <Card.Img variant="top" src="https://www.goodtherapy.org/blog/blog/wp-content/uploads/2016/01/Woman-therapist-smiling-at-person-in-therapy.jpg" style={{height:"250px"}} className='img-fluid' />
      <Card.Body>
        <Card.Title className='text-success'>Get Help Now</Card.Title>
        <Card.Text>
        Don't suffer in silence. Reach out to:
    - Mental health professionals
     </Card.Text>
     <Link className="btn btn-success mt-4" to={sessionStorage.getItem('token')?'/appointment':'/auth'}>Book A Slot</Link>
      </Card.Body>
    </Card>
   </div>
   <div className='mt-5 container fluid mt-5'>
    <Row>
      <Col className='d-flex flex-column justify-content-center' md={6}>
      <h1 className='mb-4'>Professional and qualified therapists who you can trust</h1>
      <p className='para2'>Tap into the network of qualified and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want.</p>
      <Link className='btn btn-success mt-3' to={sessionStorage.getItem('token')?'/appointment':'/auth'}>Get Matched To Terapists</Link>
      </Col>
      <Col md={6}><img src="https://mwintegrativetherapy.com/wp-content/uploads/2023/01/Happy_black_woman_talking_to_psychologist_after_successful_therapy_session.jpeg" className='img-fluid' alt="" style={{borderRadius:"10px"}} /></Col>
    </Row>

   </div>
   {
    doctor.length>0?
    <div className=' container-fluid row mt-5 justify-content-center'>
      {
        doctor.slice(0,3).map(item=>(
          <Card style={{ width: '18rem' }} className='me-5 p-0 mb-3'>
      <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} style={{height:"250px"}}/>
      <Card.Body>
        <Card.Title>{item.username}</Card.Title>
        <Card.Text>
         <h6>{item.qualification}</h6>
         
        </Card.Text>
        <Link className="btn btn-success" to={sessionStorage.getItem('token')?'/appointment':'/auth'}>Book A Slot</Link>
      </Card.Body>
    </Card>

        ))
      }


   
    
   </div>
   :
   <h2 className='text-center text-danger mt-3'>No content Available</h2>
   }
   
   <div className='d-flex justify-content-center mt-3'><Link className='btn btn-link' to={sessionStorage.getItem('token')?'/appointment':'/auth'}>View More</Link></div>
   <div className='container mt-5'>
    <Row>
      <Col md={6} className='d-flex flex-column justify-content-center'>
      <h1 className=''>Share Your Voice, Inspire Hope
      Break the Silence, Empower Others</h1>
      <p className='story mt-3'>Your story matters. Share your journey, struggles, and triumphs with our community. By speaking out, you'll help others feel less alone, find strength, and discover hope. Write your post today and inspire a ripple of change. Together, let's break the stigma surrounding mental health and substance abuse, and foster a supportive environment for healing and growth</p>
      <Link className='btn btn-success  mt-3' to={sessionStorage.getItem('token')?'/post':'/auth'}>Share Your Story</Link>
      </Col>
      <Col md={6}>
      <img src="https://img.freepik.com/premium-photo/flat-vector-style-illustration-diverse-group-people-talking-collaborating_941097-83063.jpg" className='img-fluid' style={{borderRadius:"10px"}} alt="" /></Col>
    </Row>
   </div>
   {
        profiledetail.length>0?
  
    <div className='container-fluid  justify-content-center d-flex flex-row mt-5'>
      {
        profiledetail.slice(0,3).map(item=>(
          <Link to={sessionStorage.getItem('token')?'/post':'/auth'}>
      <div className='text-center me-4'>
     
        <img src={`${base_url}/uploads/${item.image}`} alt=""  className='rounded-circle img-fluid' style={{height:"150px",width:"150px"}}/>
      <h6 className=' '>{item.username}</h6>
      
     
      
    </div>
    </Link>

        ))
      }
      
        
    
   
 
    
 
 <Link className='mt-5' to={sessionStorage.getItem('token')?'/post':'/auth'}><i className="fa-solid fa-arrow-right-from-bracket fa-beat fa-xl" style={{color: "#74C0FC",}} /></Link>
     
     
    

    </div>
    :<h2 className='text-center text-danger'>No content Available</h2>
}
    <div className='container mt-5'>
      <Row>
        <Col md={8} className='d-flex justify-content-center align-items-center flex-column'>
        <h1>Learn, Grow, Thrive: Understanding Mental Health and Resilience</h1>
        
        <Link className='btn btn-primary text-center mt-4' to={'/advice'} style={{height:"40px",width:"300px"}}>Learn More</Link>
        
        </Col>
        <Col md={4}><img src="https://www.brigittetrust.org/wp-content/uploads/2021/10/coffin-club-signpost-final.jpg" alt=""  className='img-fluid' style={{borderRadius:"10px"}}/></Col>

      </Row>
      

    </div>
    <div className='mt-5'>
      <Footer></Footer>

    </div>
    </div>
    
   </>
  )
}
export default Landing

