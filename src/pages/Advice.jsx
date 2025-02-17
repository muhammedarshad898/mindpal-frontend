import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardTitle } from 'react-bootstrap';
import Youtubevideocard from '../Components/Youtubevideocard';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../Components/Footer';


function Advice() {
  return (
   <>
   {/* <Sidebar></Sidebar> */}
   <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='d-flex justify-content-center'>
          
          <Navbar.Brand href="#" className='d-flex justify-content-center flex-row align-items-center'>  <i className="fa-regular fa-handshake fa-xl" style={{color: "#0f6ba3",}} />
          {' '}
            Mindpal </Navbar.Brand>
           
        </Container>
        <Link to={'/appointment'} className='btn btn-primary me-3'>Take an Appointment</Link>
      </Navbar>
   <div className='banner d-flex justify-content-center flex-column align-items-center'>
    <div className='container'>
      <h1 className='sample'>Heal,Grow,Thrive...</h1>
      <h1 className='sample2'>Take a Journey With Us</h1>
      <p className='para3'>Welcome to MindPal, your personalized mental health platform.<br/>  Our comprehensive toolkit offers a range of resources,<br/> including mood tracking,  therapy sessions, and community support, to help you navigate<br/>  life's challenges and achieve a healthier, happier you.<br/></p>
<div className=''>
      <Link className='btn text-center' to={'/appointment'} id="btn-apo">Take an appointment</Link>
      </div>
    </div>
   </div>
   <div className='d-flex justify-content-center container mt-5'>
    <h2 className='me-4'>Pick from yours feeds</h2>
    <input type="text" className='form-control' placeholder='Search' style={{width:"500px"}} />
   </div>
   
   <div className='mt-5  row justify-content-center container-fluid align-items-center'>
   
   <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9789386797476/young-mental-health-9789386797476_hr.jpg" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle  className='text-center'>Author:Meera haran halva</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/05/14/12/tonijones-es-may-anxiety-journal.jpg?width=640&auto=webp&quality=75&crop=596:851%2Csmart" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle  className='text-center'>Author:CorrineSweet</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://gl-images.condecdn.net/image/XO17ey28o0W/crop/1020/f/61waq02z-8l.png" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle  className='text-center'>Author:Aaron Gillies</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://gl-images.condecdn.net/image/OeLWEpGL3xn/crop/1020/f/71qkq9mwv7l_.png" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle className='text-center'>Author:Mark Mansoon</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://imgix.bustle.com/uploads/image/2018/1/24/4da55cd5-fcd6-4901-bb2f-9012a79d45b3-everythingisbeautiful.jpg?w=632&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle className='text-center'>Author:Mirat.lee</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.RPQ61m02dFV82EFPJB1RZAHaK6?rs=1&pid=ImgDetMain" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle className='text-center'>Author:Adolpha Landman</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.utMvr_5zFC0QNlfD8Ajn2QHaLX?rs=1&pid=ImgDetMain" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle className='text-center'>Author:Josephmurphy</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle className='text-center'>Author:Brucede Perry</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://images.prestigeonline.com/wp-content/uploads/sites/5/2022/09/07140154/9781507209141.jpg" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle className='text-center'>Author:Murphyhiscook</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://dianaelizabethblog.com/wp-content/uploads2/2021/03/cover-ebook-healing-from-broken-engagement-book_WEBlowres.jpg" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle className='text-center'>Author:Dania Elezepath </CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
      <Card.Img variant="top" src="https://datingbrides.com/media/images/upload/images/21136_The-5-Love-Languages-Book_Front_1200x1200_759e9468-adcf-4c2e-b35a-ec6a19b8a861_530x.jpg" style={{height:"350px"}} className='img-fluid' />
      <Card.Body>
        <CardTitle className='text-center'>Author:Gary Chapman</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',padding:"0px" }}  className='me-5 mb-3'>
    <Card.Img variant="top" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781582707129/heal-9781582707129_hr.jpg" style={{height:"350px"}} className='img-fluid' />
    <Card.Body>
        <CardTitle className='text-center'>Author:Kelly nonan</CardTitle>
        <div className='d-flex justify-content-center'>
       <a href="https://www.amazon.in/Science-Getting-Started-procrastination-productivity/dp/9395192933/ref=sr_1_1_sspa?crid=30KJKZ6N88DM6&dib=eyJ2IjoiMSJ9.Pe2gIF1SArlt84zJs3srxdO4Mt8PbF_sps7ySlJsdbZ8KVh9p6NpTdk4_C5bUA6Kn1guZy6DVTaAYulQqmQHzvNgNN2DCmKvUo3ojHVBh3f6Wij1tvzKD0eA85UC7ckCsfNbf3rGjSsoWW8hYIr2fH3WBjDYa4c3C0IaUKN6gW7K67qGzJy5lX8ELzkqb6OqLpxaSxtG_tVQShazEKmGFME4V89OkcDbA6KFdjwz9Mg.ae-FUxCX5NU0wymg0YY8wfYGZ3HiGO-t8oOoBuAIloA&dib_tag=se&keywords=mental+health+books&qid=1732556973&sprefix=mental+health+%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='btn btn-primary'>Purchase</a>
        </div>
        
      </Card.Body>
    </Card>



   </div>
   <div className='container-fluid row justify-content-center mt-5 align-items-center'>

    <Youtubevideocard></Youtubevideocard>
   </div>
   <div className='container d-flex mt-5'>
    <i className="fa-regular fa-clock fa-xl mt-4 me-2"  style={{color: "#cc1476",}} />
    <h2 className='mt-1 text-dark'>Recent</h2>
    </div>
   <div className='row container-fluid justify-content-center align-items-center mt-3'>
    
   <Card style={{ width: '20rem',padding:"0px"  }} className='me-5 mb-2'>
      <Card.Img variant="top" src="https://sassytownhouseliving.com/wp-content/uploads/2020/11/man-giving-flowers-and-gift-to-woman.jpeg" style={{height:"200px"}} className='img-fluid' />
      <Card.Body>
        <Card.Text style={{fontSize:"20px",fontWeight:"100px"}}>
        Giving gifts can have a profound impact on both the giver and receiver's mental health.
     </Card.Text>
     <Link className="btn btn-success mt-3" to={'/appointment'}><i className="fa-solid fa-arrow-right fa-lg fa-beat" size="xl" /></Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',padding:"0px"  }} className='me-5 mb-2'>
      <Card.Img variant="top" src="https://dy7glz37jgl0b.cloudfront.net/advice/images/f5d49829999c0d540ca80a989bffd853-woman-with-weiner-dog-in-bed_l.jpg" style={{height:"200px"}} className='img-fluid' />
      <Card.Body>
        <Card.Text style={{fontSize:"20px",fontWeight:"100px"}}>
        Taking a break from work can be a powerful way to prioritize your both your physical and mental health
     </Card.Text>
     <Link className="btn btn-success mt-3" to={'/appointment'}><i className="fa-solid fa-arrow-right fa-lg fa-beat" size="xl" /></Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',padding:"0px"  }} className='me-5 mb-2'>
      <Card.Img variant="top" src="https://images.ctfassets.net/iyiurthvosft/img-of-media-slide-269723/dbd21e19762f44c70aab712c8f095af4/img-of-media-slide-269723.jpg?fm=webp&w=1088&q=75" style={{height:"200px"}} className='img-fluid' />
      <Card.Body>
        <Card.Text style={{fontSize:"20px",fontWeight:"100px"}}>
        Celebrating holidays with loved ones can have a profound impact on mental health. give refresh
     </Card.Text>
     <Link className="btn btn-success mt-3" to={'/appointment'}><i className="fa-solid fa-arrow-right fa-lg fa-beat" size="xl" /></Link>
      </Card.Body>
    </Card>
   

   </div>
   <div className='d-flex container mt-5'>
   <i className="fa-solid fa-heart fa-xl mt-4 me-2" style={{color: "#c70a3a",}} />
   <h2 className='text-dark'>Popular</h2>

   </div>
   <div className='row container-fluid justify-content-center align-items-center mt-3 mb-5'>
   <Card style={{ width: '20rem',padding:"0px"  }} className='me-5 mb-2'>
      <Card.Img variant="top" src="https://www.usnews.com/cmsmedia/a1/7c/61548aea4db9ab9045673bb5187f/160919-studentscollege-stock.jpg" style={{height:"200px"}} className='img-fluid' />
      <Card.Body>
        <Card.Text style={{fontSize:"20px",fontWeight:"100px"}}>
        Stress Management Techniques for Students:How to Decrease the Stress Level
     </Card.Text>
     <Link className="btn btn-success mt-3" to={'/appointment'}><i className="fa-solid fa-arrow-right fa-lg fa-beat" size="xl" /></Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',padding:"0px"  }} className='me-5 mb-2'>
      <Card.Img variant="top" src="https://www.couplestherapytraining.org/wp-content/uploads/2020/09/43555-Copy-Copy.jpg" style={{height:"200px"}} className='img-fluid' />
      <Card.Body>
        <Card.Text style={{fontSize:"20px",fontWeight:"100px"}}>
       How Harsenning WillPower to Meet your Goal Can Change Your Life
     </Card.Text>
     <Link className="btn btn-success mt-3" to={'/appointment'}><i className="fa-solid fa-arrow-right fa-lg fa-beat" size="xl" /></Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',padding:"0px"  }} className='me-5 mb-2'>
      <Card.Img variant="top" src="https://advice.cdn.betterhelp.com/advice/images/betterhelp/7708/341c509086ff5067842a0d7027315868-girl-holding-mug-smiling-by-computer_l_sm.jpg" style={{height:"200px"}} className='img-fluid' />
      <Card.Body>
        <Card.Text style={{fontSize:"20px",fontWeight:"100px"}}>
       How to Harness Ambitions In Your life for positive Outcomes and Healthy Mind
     </Card.Text>
     <Link className="btn btn-success mt-3" to={'/appointment'}><i className="fa-solid fa-arrow-right fa-lg fa-beat" size="xl" /></Link>
      </Card.Body>
    </Card>
   </div>
   <Footer></Footer>
   </>
  )
}

export default Advice