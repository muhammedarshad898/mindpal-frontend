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
   <div className='mp-hero'>
   <div className='container'>
    <h1>Healing Together, <span>Growing Together...</span></h1>
    <div>
    <p>Discover a safe, supportive space for your family to grow and thrive. Our expert therapists provide compassionate guidance to help you navigate life's challenges, strengthen relationships, and cultivate a happier, healthier home environment.</p></div>
    <div> <Link to={sessionStorage.getItem('token')?'/test':'/auth'} className='btn btn-primary mp-hero-cta'>Start with a Test</Link></div>

   </div>
   </div>

   <div className='mp-section'>
   <div className='container'>
  <div className='text-center mb-5'>
    <h2 className='mp-section-title'>Your Journey to Wellness Starts Here</h2>
    <p className='mp-section-subtitle'>Whether you're looking for self-assessment, community support, or professional guidance — we've got you covered every step of the way.</p>
  </div>
  <Row className='justify-content-center'>
    <Col xs={12} sm={6} md={4} className='d-flex mb-4'>
      <Card className="mp-feature-card">
        <Card.Img variant="top" src="https://api.kramesstaywell.com/Content/6066ca30-310a-4170-b001-a4ab013d61fd/ucr-images-v1/Images/depressed-teenager-273299" className='img-fluid' />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Recognise the Signs</Card.Title>
          <Card.Text>Don't Ignore the Warning Signs, Depression can manifest differently in everyone.</Card.Text>
          <Link className='btn btn-primary mt-auto' to={sessionStorage.getItem('token') ? '/test' : '/auth'}>Take a Test</Link>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={12} sm={6} md={4} className='d-flex mb-4'>
      <Card className="mp-feature-card">
        <Card.Img variant="top" src="https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/ev6h6d3edq9jgbnpntvf.jpg" className='img-fluid' />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Breaking the Stigma</Card.Title>
          <Card.Text>Depression is not a sign of weakness. It's a sign of strength to seek help.</Card.Text>
          <Link className="btn btn-primary mt-auto" to={sessionStorage.getItem('token') ? '/post' : '/auth'}>Share your Story</Link>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={12} sm={6} md={4} className='d-flex mb-4'>
      <Card className="mp-feature-card">
        <Card.Img variant="top" src="https://www.goodtherapy.org/blog/blog/wp-content/uploads/2016/01/Woman-therapist-smiling-at-person-in-therapy.jpg" className='img-fluid' />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Get Help Now</Card.Title>
          <Card.Text>
            Don't suffer in silence. Reach out to:
            <br />- Mental health professionals
          </Card.Text>
          <Link className="btn btn-primary mt-auto" to={sessionStorage.getItem('token') ? '/appointment' : '/auth'}>Book A Slot</Link>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  </div>
</div>

   <div className='mp-section'>
   <div className='container'>
    <Row>
      <Col className='d-flex flex-column justify-content-center' md={6}>
      <h1 className='mb-4'>Professional and qualified therapists who you can trust</h1>
      <p>Tap into the network of qualified and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want.</p>
      <Link className='btn btn-primary mt-3' to={sessionStorage.getItem('token')?'/appointment':'/auth'}>Get Matched To Therapists</Link>
      </Col>
      <Col md={6}><img src="https://mwintegrativetherapy.com/wp-content/uploads/2023/01/Happy_black_woman_talking_to_psychologist_after_successful_therapy_session.jpeg" className='img-fluid mp-rounded-img' alt="" /></Col>
    </Row>
   </div>
   </div>
   {
    doctor.length>0?

  <div className='mp-section'>
  <div className='container'>
  <Row className='justify-content-center'>
    {
      doctor.length > 0 &&
      doctor.slice(0, 3).map(item => (
        <Col xs={12} sm={6} md={4} className='d-flex mb-4' key={item._id}>
          <Card className="mp-doctor-card">
            <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} />
            <Card.Body className='d-flex flex-column'>
              <Card.Title>{item.username}</Card.Title>
              <Card.Text><h6>{item.qualification}</h6></Card.Text>
              <Link className="btn btn-primary mt-auto" to={sessionStorage.getItem('token') ? '/appointment' : '/auth'}>Book A Slot</Link>
            </Card.Body>
          </Card>
        </Col>
      ))
    }
  </Row>
  </div>
</div>

   :
   <h2 className='text-center text-danger mt-3'>No content Available</h2>
   }

   <div className='d-flex justify-content-center mt-3'><Link className='btn btn-link' to={sessionStorage.getItem('token')?'/appointment':'/auth'}>View More</Link></div>
   <div className='mp-section'>
   <div className='container'>
    <Row>
      <Col md={6} className='d-flex flex-column justify-content-center'>
      <h1>Share Your Voice, Inspire Hope
      Break the Silence, Empower Others</h1>
      <p className='mt-3'>Your story matters. Share your journey, struggles, and triumphs with our community. By speaking out, you'll help others feel less alone, find strength, and discover hope. Write your post today and inspire a ripple of change. Together, let's break the stigma surrounding mental health and substance abuse, and foster a supportive environment for healing and growth</p>
      <Link className='btn btn-primary mt-3' to={sessionStorage.getItem('token')?'/post':'/auth'}>Share Your Story</Link>
      </Col>
      <Col md={6}>
      <img src="https://img.freepik.com/premium-photo/flat-vector-style-illustration-diverse-group-people-talking-collaborating_941097-83063.jpg" className='img-fluid mp-rounded-img' alt="" /></Col>
    </Row>
   </div>
   </div>
   {
        profiledetail.length>0?

    <div className='container d-flex justify-content-center flex-row mt-5'>
      {
        profiledetail.slice(0,3).map(item=>(
          <Link to={sessionStorage.getItem('token')?'/post':'/auth'} key={item._id}>
      <div className='text-center me-4'>

        <img src={`${base_url}/uploads/${item.image}`} alt={item.username} className='mp-avatar-lg' onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name='+encodeURIComponent(item.username)+'&background=2E86C1&color=fff&size=120'}}/>
      <h6 className='mt-2'>{item.username}</h6>



    </div>
    </Link>

        ))
      }








 <Link className='mt-5' to={sessionStorage.getItem('token')?'/post':'/auth'}><i className="fa-solid fa-arrow-right-from-bracket fa-beat fa-xl" /></Link>




    </div>
    :<h2 className='text-center text-danger'>No content Available</h2>
}
    <div className='mp-section'>
    <div className='container text-center'>
        <h2 className='mp-section-title'>Learn, Grow, Thrive</h2>
        <p className='mp-section-subtitle'>Explore expert articles, curated book recommendations, and insightful videos to deepen your understanding of mental health and build lasting resilience.</p>
        <Link className='btn btn-primary mp-hero-cta mt-4' to={'/advice'}>Explore Resources</Link>
    </div>
    </div>
    <div className='mt-5'>
      <Footer></Footer>

    </div>
    </div>

   </>
  )
}
export default Landing
