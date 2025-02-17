
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { deletepostapi, getpostsapi, getprofileapi, likePostapi } from '../services/allapi';
import base_url from '../services/baseurl';
import Profile from './Profile';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { responsecontext } from '../contextapi/Contextprovider';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';


function Postindividual() {
    const [postindividual, setPostIndividual] = useState([]);
    const [profiledetail, setProfileDetail] = useState({});
    const { userid } = useParams();
    const { response } = useContext(responsecontext);
    

   
    const token = sessionStorage.getItem('token');
    let loggedInUserId = null;

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            loggedInUserId = decodedToken.userid;
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    }

    useEffect(() => {
        getposts();
        handleGetProfile();
    }, [userid, response]);

    const getposts = async () => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        };
        try {
            const result = await getpostsapi(userid, header);
            if (result.status === 200) {
                setPostIndividual(result.data);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleGetProfile = async () => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        };
        try {
            const result = await getprofileapi(userid, header);
            if (result.data.length > 0) {
                setProfileDetail(result.data[0]);
            } else {
                setProfileDetail({});
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    const handleDeletePost = async (id) => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        };
        try {
            const result = await deletepostapi(id, header);
            if (result.status === 200) {
                toast.success("Post Removed");
                getposts();
            } else {
                toast.error("Failed to delete post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            toast.error("Error deleting post");
        }
    };

    const handleLikePost = async (id) => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        };
        const result = await likePostapi(id, header);
        if (result.status === 200) {
            getposts();
        }
    };

    return (
        <>
           
            <Navbar className="navbar1 position-fixed w-100 shadow bg-white" style={{ top: 0, left: 0, zIndex: 1000 }}>
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home" className="text-primary" id="log">
                        <i className="fa-regular fa-handshake fa-xl" style={{ color: "#0f6ba3" }} />{' '}
                        Mindpal
                    </Navbar.Brand>
                    <Profile />
                </Container>
            </Navbar>

           
            <div className='main2' style={{ marginTop: "70px" }}>
                <Row>
                  
                    <Col md={4}>
                        <div className='profile'>
                            <div className='border shadow' style={{ height: "100vh", width: "250px", position: "fixed", top: "70px" }}>
                                <div className='text-center mt-5'>
                                    <i className="fa-regular fa-handshake fa-xl" style={{ color: "#0f6ba3" }} />{' '}
                                    Mindpal
                                </div>
                                <div className='mt-5 container ms-2'>
                                    <img src={`${base_url}/uploads/${profiledetail.image}`} alt="" className='img-fluid' style={{ height: "200px", width: "200px", borderRadius: "10px" }} />
                                </div>
                                <div className='border shadow mt-2 container' style={{ height: "fit-content", width: "210px", borderRadius: "10px" }}>
                                    <h4 className='text-center'></h4>
                                    <p>{profiledetail.bio}</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                   
                    <Col md={{ span: 8, offset: 4 }} style={{ paddingTop: "20px" }}>
                        <div className='w-100'>
                            {postindividual.length > 0 ? (
                                <div className='row justify-content-center align-items-center mt-5'>
                                    {postindividual.map(item => (
                                        <div key={item._id} className='border shadow mb-3 p-3' style={{ width: "700px", borderRadius: "10px" }}>
                                            <div className='d-flex flex-row mt-2 justify-content-between'>
                                                <p className=''>{item.date}</p>
                                                <h6 className='text-center'>{item.title}</h6>
                                            </div>
                                            <p>{item.thought}</p>

                                            {/* Like & Delete Button */}
                                            <div className='d-flex justify-content-center flex-wrap'>
                                                <button className='btn btn-light me-2' onClick={() => handleLikePost(item._id)}> {item.likes.length}  
                                                    <i className="fa-solid fa-heart fa-xl" style={{ color: "#c90d45" }} />
                                                </button>

                                                {String(item.userid) === String(loggedInUserId) && (
                                                    <button className='btn' onClick={() => handleDeletePost(item._id)}>
                                                        <i className="fa-solid fa-trash fa-xl" style={{ color: "#bc1515" }} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <h2 className='text-center text-danger'>No content Available</h2>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Postindividual;
